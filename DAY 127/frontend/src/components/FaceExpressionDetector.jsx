import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
export default function FacialExpression() {
  const videoRef = useRef();

  useEffect(() => 
  {
    const loadModels = async () => 
    {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    const startVideo = () => 
    {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing webcam: ", err));
    };
    // const handleVideoPlay = () => {
    //   setInterval(async () => {
    //     const detections = await faceapi
    //       .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
    //       .withFaceExpressions();
    //       let mostPropableExpression = 0;
    //       let _expression = '';

    //       if (!detections || detections.length === 0) 
    //       {
    //         console.log("No FACE DETECTED!");
    //         return;
    //       }

    //       for(const expression of Object.keys(detections[0].expressions))
    //       {
    //           if (detections[0].expressions[expression] > mostPropableExpression) 
    //           {
    //             mostPropableExpression = detections[0].expressions[expression]
    //             _expression = expression;
    //           }
    //       }
    //       console.log(mostPropableExpression);
    //       console.log(_expression);

    //   }, 3000);
    // };

    loadModels().then(startVideo);
    // videoRef.current && videoRef.current.addEventListener('play', handleVideoPlay);
  }, []);

  async function detectMood()
  {
      const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

      let mostPropableExpression = 0;
      let _expression = '';

      if (!detections || detections.length === 0) 
      {
        console.log("No FACE DETECTED!");
        return;
      }

      for(const expression of Object.keys(detections[0].expressions))
      {
        if (detections[0].expressions[expression] > mostPropableExpression) 
        {
          mostPropableExpression = detections[0].expressions[expression]
          _expression = expression;
        }
      }
      // console.log(mostPropableExpression);
      console.log(_expression);
  };


  return (
    <div style={{ position: 'relative' }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{ width: '720px', height: '560px' }}
      />
      <button onClick={detectMood}>Detect Mood</button>
    </div>
  );
}