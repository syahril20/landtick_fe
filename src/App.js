import Footer from "./component/footer";
import ComplexNavbar from "./component/navbar/navbar";
import Home from "./views/home";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log("WADUH");
  return (
    <>
    <ComplexNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      
    </>
  );
}

export default App;
