import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
await faceapi.nets.tinyFaceDetector.loadFromUri('/models');


export default function FaceExpressionDetector() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    async function loadModels() {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      startVideo();
    }

    function startVideo() {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        videoRef.current.srcObject = stream;
      });
    }

    loadModels();
  }, []);

  useEffect(() => {
    videoRef.current &&
      videoRef.current.addEventListener("play", () => {
        const canvas = canvasRef.current;
        const displaySize = {
          width: videoRef.current.width,
          height: videoRef.current.height,
        };
        faceapi.matchDimensions(canvas, displaySize);

        const interval = setInterval(async () => {
          const detections = await faceapi
            .detectAllFaces(
              videoRef.current,
              new faceapi.TinyFaceDetectorOptions()
            )
            .withFaceLandmarks()
            .withFaceExpressions();

          const resized = faceapi.resizeResults(detections, displaySize);
          canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
          faceapi.draw.drawDetections(canvas, resized);
          faceapi.draw.drawFaceLandmarks(canvas, resized);
          faceapi.draw.drawFaceExpressions(canvas, resized);
        }, 100);

        return () => clearInterval(interval);
      });
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        muted
        width="640"
        height="480"
        className="rounded-xl"
      />
      <canvas
        ref={canvasRef}
        width="640"
        height="480"
        className="absolute top-0 left-0"
      />
    </div>
  );
}
