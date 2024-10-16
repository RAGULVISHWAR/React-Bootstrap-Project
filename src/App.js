import "./App.css";
import "./css/main.min.css";
import Appnavbar from "./components/Appnavbar";
import Appbanner from "./components/Appbanner";
import Appmenu from "./components/Appmenu";

function App() {
  return (
    <>
      <Appnavbar />
      <Appbanner />
      <Appmenu />
    </>
  );
}

export default App;
