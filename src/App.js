import { useDispatch, useSelector } from "react-redux";
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
import { useEffect } from "react";
import { GET_USER_SUCCESS } from "./config/redux/constant/user";
import Swal from "sweetalert2";
import Payment from "./views/user/payment";

function App() {
  console.log("WADUH");
  // const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth);
  // const checkAuth = () =>{
  //   try{
  //    const payload = auth?.user?.token
  //    dispatch({
  //     type: GET_USER_SUCCESS,
  //     data: payload
  //    })
  //   }catch(error){
  //     Swal.fire("TOKEN HABIS")
  //     console.log("TOKEN ABIS PAK");
  //     // dispatch({
  //     //   type: GET_USER_SUCCESS,
  //     //   data: payload
  //     //  })
  //   }
    
  // }
  // useEffect(()=>{
  //   if(auth?.user?.token){

  //     checkAuth()
  //   }
  //   console.log(auth?.user?.token, "INI AUTH");
  // },[])
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
          <Route exact path="/payment/:id" element={<Payment token={auth?.user?.token}/>} />
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
