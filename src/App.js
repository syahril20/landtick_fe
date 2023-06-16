import { useSelector } from "react-redux";
import Footer from "./component/footer/footer";
import ComplexNavbar from "./component/navbar/navbar";
import Admin from "./views/admin/admin";
import Home from "./views/home";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log("WADUH");
  const auth = useSelector((state) => state.auth)
  return (
    <>
    <ComplexNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<Admin token={auth?.user?.token}/>} />
      </Routes>
      
    </>
  );
}

export default App;
