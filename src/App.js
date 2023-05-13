import Navbar from "./components/Navbar";
import DarkMode from "./components/DarkMode";
// import TextForm from "./components/TextForm";
import "./App.css";

function App() {
  return (
    <>
      <Navbar aboutText="About us" />
      <div className="container">
        {/* <TextForm heading="Enter the text below" /> */}
        <DarkMode/>
      </div>
    </>
  );
}

export default App;
