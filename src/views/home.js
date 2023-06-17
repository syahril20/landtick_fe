import {
  Spinner
} from "@material-tailwind/react";
import "animate.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import promo1 from "../assets/promo1.png";
import promo2 from "../assets/promo2.png";

import Footer from "../component/footer/footer";
import Search from "../component/home/search";
import TiketList from "../component/home/tiketlist";
import { getTiketFunc } from "../config/redux/action/tiket";
import { userFunc } from "../config/redux/action/user";



function Home({token}) {
  // const [tiket, setTiket] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTiketFunc());
    dispatch(userFunc(token))
  }, [dispatch,token]);

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  const state = useSelector((state) => state);

  const tiket = state?.tiket?.tiket;
  const user = state?.auth.user;
  console.log(state);

  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-40">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
        <>
          <div className="bg-gradient-to-r from-g1 to-g2 max-w-full h-[350px]">
            <div className="flex mx-[7%] gap-5 pt-10 ">
              <div className="flex flex-col justify-center animate__animated animate__backInLeft">
                <p className="font-black text-[32px] text-white mb-5">
                  Selamat Pagi, Ticket Seekers !
                </p>
                <p className="font-normal text-[20px] text-white">
                  Ingin Pulkam dengan Good Deal ?
                </p>
                <p className="font-normal text-[20px] text-white">
                  Masuk atau Daftar Sekarang !
                </p>
              </div>
              <div className="flex animate__animated animate__backInRight">
                <img src={promo1} alt="waw" className="z-10" />
                <img src={promo2} alt="waw" className="absolute ml-5 mt-3" />
              </div>
            </div>
          </div>

          <Search />
          <TiketList />
          
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
