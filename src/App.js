import { useSelector } from "react-redux";
import Footer from "./component/footer/footer";
import ComplexNavbar from "./component/navbar/navbar";
import Admin from "./views/admin/admin";
import Home from "./views/home";
import { Routes, Route } from "react-router-dom";
import {
  PrivateRouteAdmin,
  PrivateRouteLogin,
  PrivateRouteUser,
  PublicRoute,
} from "./config/root/private";
import Tiket from "./views/user/tiket";
import AddTiket from "./views/admin/tiket";

function App() {
  console.log("WADUH");
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <ComplexNavbar token={auth?.user?.token} />
      <Routes>

        
        {/* ADMIN */}
        <Route element={<PrivateRouteAdmin />}>
          <Route path="/admin" element={<Admin token={auth?.user?.token} />} />
          <Route path="/addTiket" element={<AddTiket token={auth?.user?.token} />}
          />
        </Route>

        {/* USER */}
        <Route element={<PrivateRouteUser />}>
          <Route exact path="/tiket-saya" element={<Tiket />} />
        </Route>

        {/* PUBLIC */}
        <Route element={<PublicRoute />}>
          <Route exact path="/" element={<Home token={auth?.user?.token}/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
