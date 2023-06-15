import {
  Tab,
  Tabs,
  TabsBody,
  Typography,
  Button,
  Card,
  CardBody,
} from "@material-tailwind/react";
import "animate.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swap from "../assets/Swap.png";
import promo1 from "../assets/promo1.png";
import promo2 from "../assets/promo2.png";
import arrow from "../assets/Arrow.png";
import trainLogo from "../assets/trainLogo.png";
import { loginFunc } from "../config/redux/action/auth";
import { API_KERETA } from "../config/api/api";
import { get_keretaFunc } from "../config/redux/action/kereta";

const TABLE_HEAD = [
  "Nama Kereta",
  "Berangkat",
  "",
  "Tiba",
  "Durasi",
  "Harga Per Orang",
];

function Home() {

  const [kereta, setKereta] = useState([]);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_keretaFunc());
  }, []);

  const tiket = useSelector((state) => state.kereta);
  console.log(tiket?.kereta);
  // function Get() {
  //   API_KERETA.get().then((response) => {
  //     setKereta(response?.data);
  //   });
  // }

  // useEffect(() => {
  //   Get();
  // }, []);

  // const g = kereta.map((k) => {
  //   return { value: k.name, label: k.name };
  // });

  // console.log(g[0]);
  return (
    <>
      <div className="bg-gradient-to-r from-g1 to-g2 max-w-full h-[350px]">
        <div className="flex mx-[7%] gap-5 pt-10">
          <div className="flex flex-col justify-center">
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
          <div className="flex ">
            <img src={promo1} alt="waw" className="z-10" />
            <img src={promo2} alt="waw" className="absolute ml-5 mt-3" />
          </div>
        </div>
      </div>

      <div className="animate__animated animate__fadeInDown">
        <div className="bg-white max-w-full h-[230px] mx-[7%] -translate-y-10 shadow-lg rounded-md ">
          <Tabs value="dashboard" orientation="vertical">
            <div className="bg-[#F2F2F2] h-[230px] rounded">
              <div className="w-60 mt-2 h-12">
                <Tab
                  value="Tiket Kereta Api"
                  className="place-items-start items-center bg-white"
                >
                  <div className="flex items-center gap-2 ">
                    <div className="bg-[#E67E22] w-2 h-full absolute left-0 top-0" />
                    <img src={trainLogo} className="ml-4" />
                    Tiket Kereta Api
                  </div>
                </Tab>
              </div>
            </div>
            <TabsBody className="mt-2 mx-[3%]">
              <div>
                <p className="font-normal text-[16px] mb-2">TIKET KERETA API</p>
                <form className="flex justify-between">
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <p className="font-extrabold text-[14px]">Asal</p>
                        <input
                          placeholder="Tujuan"
                          className="w-[350px] h-7 pl-2 border-2 border-[#B1B1B1] rounded-md"
                        />
                      </div>
                      <div className="flex">
                        <div className="flex flex-col gap-2">
                          <p className="font-extrabold text-[14px]">
                            Tanggal Berangkat
                          </p>
                          <input
                            placeholder="DD - MM - YY"
                            className="mr-20 w-32 h-7 pl-2 border-2 border-[#B1B1B1] rounded-md"
                          />
                        </div>
                        <div className="flex">
                          <div>
                            <input
                              type="checkbox"
                              className="border-2 border-[#B1B1B1] rounded-md mr-2"
                            />
                            <label className="font-extrabold text-[14px]">
                              Pulang Pergi
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <img
                    src={swap}
                    className="w-[50px] h-[50px] mt-4 cursor-pointer"
                  />

                  <div className="flex">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <p className="font-extrabold text-[14px]">Asal</p>
                        <input
                          placeholder="Tujuan"
                          className="w-[350px] h-7 pl-2 border-2 border-[#B1B1B1] rounded-md"
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <p className="font-extrabold text-[14px]">Dewasa</p>

                          <select
                            label="Select Version"
                            className="text-center w-[100px] h-7 border-2 border-[#B1B1B1] rounded-md"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-extrabold text-[14px]">Bayi</p>

                          <select
                            label="Select Version"
                            className="text-center w-[100px] h-7 border-2 border-[#B1B1B1] rounded-md"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div className="flex items-end">
                          <Button className="h-7 text-white font-semibold rounded px-6 py-1 ml-2 bg-gradient-to-r from-g1 to-g2">
                            Cari Tiket
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </TabsBody>
          </Tabs>
        </div>
      </div>

      <div className="animate__animated animate__fadeInDown">
        <div className="h-full mx-[5%]">
          <div class="grid grid-cols-6 gap-4 text-center">
            {TABLE_HEAD.map((head) => (
              <th key={head} className=" pb-4 px-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}

            {tiket?.kereta?.map((tiket, idx) => {
              return (
                <>
                  <div className="col-span-6 grid grid-cols-6 bg-white py-5 mb-4 rounded-md shadow-md">
                    <div>
                      <p className="font-extrabold">{tiket.nama_kereta}</p>
                      <p className="text-[#B7B7B7] text-[12px]">
                        {tiket.jenis_kereta.jenis_kereta}
                      </p>
                    </div>
                    <div className="">
                      <p className="font-extrabold">{tiket.jam_berangkat}</p>
                      <p className="text-[#B7B7B7] text-[12px]">
                        {tiket.stasiun_berangkat}
                      </p>
                    </div>
                    <div className=" flex items-center justify-center">
                      <img src={arrow} alt="waw" />
                    </div>
                    <div className="">
                      <p className="font-extrabold">{tiket.jam_tiba}</p>
                      <p className="text-[#B7B7B7] text-[12px]">
                        {tiket.stasiun_tujuan}
                      </p>
                    </div>
                    <div>
                      <p className="font-extrabold">5j 05m</p>
                      <p className="text-[#B7B7B7] text-[12px]"></p>
                    </div>
                    <div>
                      <p className="font-extrabold">
                        Rp. {tiket.harga.toLocaleString("en-us")}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
