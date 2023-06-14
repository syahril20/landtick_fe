import Home from "./views/home";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log("WADUH");
  return (
    <Routes>
      <Route exact path="/s"element={<Home/>}/>
    </Routes>
  );
}

export default App;
