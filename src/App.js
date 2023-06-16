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
} from "./config/root/private";
import Tiket from "./views/user/tiket";

function App() {
  console.log("WADUH");
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <ComplexNavbar />
      <Routes>
        

        {/* ADMIN */}
        <Route element={<PrivateRouteAdmin />}>
          <Route
            exact
            path="/admin"
            element={<Admin token={auth?.user?.token} />}
          />
         
        </Route>
        
        
        {/* USER */}
        <Route element={<PrivateRouteUser />}>
          <Route
            exact
            path="/"
            element={<Home token={auth?.user?.token}/>}
          />
          <Route
            exact
            path="/tiket/:id"
            element={<Tiket />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
