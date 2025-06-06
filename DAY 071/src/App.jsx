const App = () => {

  const handelClick = () =>
  {
      alert('Button Clicked!');
  }

  const handeParamlClick = (msg) =>
  {
      alert(msg);
  }

  const Wrapperhandler = () =>
  {
      handeParamlClick('Hello Jii');
  }

  return (
    <>
        <h1>{2 + 3}</h1>
        <div>App</div>
        <div>Hello</div>
        <button onClick={handelClick}>Click</button>
        <button onClick={Wrapperhandler}>Click(Param)</button>
        <button onClick={() => handeParamlClick('Hello Jii(With Sort Fnc)')}>Click(ParamS)</button>
    </>
  )
}

export default App