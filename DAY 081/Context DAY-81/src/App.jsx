import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  return (
    <div className="text-white flex gap-2 w-screen h-screen bg-gray-800 p-20">
      <Create />
      <hr />
      <Read />
    </div>
  );
}

export default App; 