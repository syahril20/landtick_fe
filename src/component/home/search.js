import { Button, Tab, Tabs, TabsBody } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import swap from "../../assets/Swap.png";
import trainLogo from "../../assets/trainLogo.png";
import { Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import arrow from "../../assets/Arrow.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AddOrder } from "../../config/redux/action/tiket";
import { AddtransaksiFunc } from "../../config/redux/action/transaksi";
export default function Search({ token }) {
  const TABLE_HEAD = [
    "Nama Kereta",
    "Berangkat",
    "",
    "Tiba",
    "Durasi",
    "Harga Per Orang",
  ];
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const tiket = state?.tiket?.tiket;
  const user = state?.auth.user;
  const users = state?.user.user;
  const order = state?.tiket?.order;
  const Nav = useNavigate();

  const [dewasa, setDewasa] = useState(0);
  const [anak, setAnak] = useState(0);
  const [pp, setPp] = useState(false);
  const [qty, setQty] = useState();

  useEffect(() => {
    setQty(parseInt(dewasa) + parseInt(anak));
  }, [dewasa, anak]);

  const date = new Date();
  console.log(order, "WAW");
  return (
    <>
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
                <p className="font-normal text-[16px] mb-2">TIKET TIKET API</p>
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
                              onChange={(e) => {
                                setPp(!pp);
                              }}
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
                            onChange={(e) => {
                              setDewasa(e.target.value);
                              console.log(e.target.value);
                            }}
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="font-extrabold text-[14px]">Bayi</p>

                          <select
                            label="Select Version"
                            className="text-center w-[100px] h-7 border-2 border-[#B1B1B1] rounded-md"
                            onChange={(e) => {
                              setAnak(e.target.value);
                              console.log(e.target.value);
                            }}
                          >
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
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
          <div className="grid grid-cols-6 gap-4 text-center">
            {TABLE_HEAD.map((head) => (
              <div key={head} className=" pb-4 px-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </div>
            ))}

            {tiket?.map((tiked) => {
              return (
                <>
                  {/* <Link to={`tiket/${tiked.id_tiket}`} className="col-span-6 grid grid-cols-6 bg-white py-5 mb-4 rounded-md shadow-md"> */}
                  <div
                    className="col-span-6 grid grid-cols-6 bg-white py-5 mb-4 rounded-md shadow-md cursor-pointer"
                    onClick={() => {
                      if (user?.role_id === 2) {
                        let a;
                        if (pp) {
                          a =
                            (tiked.harga * dewasa +
                              (tiked.harga * anak * 1) / 2) *
                            2;
                        } else {
                          a =
                            tiked.harga * dewasa + (tiked.harga * anak * 1) / 2;
                        }
                        let data = {
                          tanggal_transaksi: date,
                          qty: qty,
                          total: a,
                          status: "pending",
                          id_user: users.id_user,
                          id_tiket: tiked.id_tiket,
                        };
                        dispatch(AddOrder(data));
                        dispatch(AddtransaksiFunc(order, token));
                        
                      } else {
                        Swal.fire("HARAP LOGIN");
                      }
                    }}
                  >
                    <div>
                      <p className="font-extrabold">{tiked.nama_kereta}</p>
                      <p className="text-[#B7B7B7] text-[12px]">
                        {tiked.jenis_kereta.jenis_kereta}
                      </p>
                    </div>
                    <div className="">
                      <p className="font-extrabold">{tiked.jam_berangkat}</p>
                      <p className="text-[#B7B7B7] text-[12px]">
                        {tiked.stasiun_berangkat}
                      </p>
                    </div>
                    <div className=" flex items-center justify-center">
                      <img src={arrow} alt="waw" />
                    </div>
                    <div className="">
                      <p className="font-extrabold">{tiked.jam_tiba}</p>
                      <p className="text-[#B7B7B7] text-[12px]">
                        {tiked.stasiun_tujuan}
                      </p>
                    </div>
                    <div>
                      <p className="font-extrabold">5j 05m</p>
                      <p className="text-[#B7B7B7] text-[12px]"></p>
                    </div>
                    <div>
                      <p className="font-extrabold">
                        Rp. {tiked.harga.toLocaleString("en-us")}
                      </p>
                    </div>
                  </div>
                  {/* </Link> */}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
