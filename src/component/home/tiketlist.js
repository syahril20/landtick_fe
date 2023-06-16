import { Typography } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import arrow from "../../assets/Arrow.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const TABLE_HEAD = [
    "Nama Kereta",
    "Berangkat",
    "",
    "Tiba",
    "Durasi",
    "Harga Per Orang",
  ];
export default function TiketList() {
    const state = useSelector((state) => state);
    const tiket = state?.tiket?.tiket;
    const user = state?.auth.user;
    const Nav = useNavigate()
  return (
    <>
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
                      user?.role_id === 2 ? Nav(`/tiket/${tiked.id_tiket}`) : Swal.fire("MEMEK");
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
