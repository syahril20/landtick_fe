import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import backLogo from "../../assets/backLogo.png";
import whiteLogo from "../../assets/whiteLogo.png";
import {
  Button,
  Chip,
  Spinner,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";
import { API_KERETA } from "../../config/api/api";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

export default function Tiket() {
  const [loading, setLoading] = useState(true);
  const state = useSelector((state) => state);
  const transaksi = state?.user?.user?.transaksi;
  const user = state?.user?.user;
  const [stasiun, setStasiun] = useState();
  const getStasiun = () => {
    API_KERETA.get().then((res) => {
      setStasiun(res.data);
    });
  };
  useEffect(() => {
    getStasiun();
  }, []);

  const berangkat = stasiun?.filter((s) => s?.city === "BANDUNG");
  console.log(berangkat, "STASIUN");
  console.log(transaksi, "TRANSAKSI");

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
    {loading ? (
        <div className="flex justify-center mt-40">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
      <div className="mx-[10%] my-20 animate__animated animate__fadeInDown">
        <p className="text-2xl font-medium">Tiket Saya</p>
        {transaksi?.map((e) => {
          const berangkat = stasiun?.filter((s) => s?.city === e?.tiket?.stasiun_berangkat);
          const tujuan = stasiun?.filter(
            (s) => s?.city === e?.tiket?.stasiun_tujuan
          );
          console.log(e?.tiket?.stasiun_berangkat, tujuan, "MEMEK");

          return (
            <>
              <div className="mx-[5%] my-10">
                <div className="w-full border-2 border-[#B1B1B1] rounded-md">
                  <div className="relative">
                    <img
                      src={backLogo}
                      alt="WAW"
                      className="-top-[2px] -left-[2px] absolute"
                    />
                    <img
                      src={whiteLogo}
                      alt="WAW"
                      className="-top-[5px] left-5 z-20 absolute"
                    />
                  </div>
                  <div className="text-right mr-[2%] mt-3">
                    <p className="text-2xl font-bold">KERETA API</p>
                    <p className="text-[#878787] text-sm">
                      <b>Saturday,</b> 21 Februari 2020
                    </p>
                  </div>
                  <div className="ml-[4%] flex gap-14 mb-10">
                    <div className="flex flex-col">
                      <div>
                        <p className="text-2xl font-semibold">
                          {e?.tiket?.nama_kereta}
                        </p>
                        <p className="text-base mb-4">
                          {e?.tiket?.jenis_kereta?.jenis_kereta}
                        </p>
                        <Chip
                          size="sm"
                          className="text-center"
                          variant="ghost"
                          value={e?.status}
                          color={
                            e?.status === "success"
                              ? "green"
                              : e?.status === "pending"
                              ? "yellow"
                              : "red"
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <Timeline>
                          <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-12 ">
                              <TimelineIcon className="bg-white border border-g1 w-[16px] h-[16px]" />
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="leading-none"
                              >
                                <p className="mb-1 font-semibold text-lg">
                                  {e?.tiket?.jam_berangkat}
                                </p>
                                <p className="ml-[2px] text-[#959595] font-thin">
                                  21 Februari 2020
                                </p>
                              </Typography>
                            </TimelineHeader>
                            <TimelineBody className="mb-10"></TimelineBody>
                          </TimelineItem>
                          <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3 ">
                              <TimelineIcon className="bg-gradient-to-r from-g1 to-g2 w-[16px] h-[16px]" />
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="leading-none"
                              >
                                <p className="mb-1 font-semibold text-lg">
                                  {e?.tiket?.jam_tiba}
                                </p>
                                <p className="ml-[2px] text-[#959595] font-thin">
                                  21 Februari 2020
                                </p>
                              </Typography>
                            </TimelineHeader>
                          </TimelineItem>
                        </Timeline>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="mb-10">
                        {berangkat?.map((e) => {
                          return (
                            <>
                              <p className="font-semibold">
                                {e.cityname} ({e.code})
                              </p>
                              <p className="text-[#959595] text-sm">{e.name}</p>
                            </>
                          );
                        })}
                      </div>
                      <div>
                        {tujuan?.map((e) => {
                          return (
                            <>
                              <p className="font-semibold">
                                {e.cityname} ({e.code})
                              </p>
                              <p className="text-[#959595] text-sm">{e.name}</p>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="ml-[4%] mr-[2%] mb-10">
                    <div className="grid grid-cols-5 gap-2">
                      <div className="border-b-2 border-[#B7B7B7] col-span-4 pb-4">
                        <div className="grid grid-cols-4 gap-2">
                          <div>
                            <p className="font-medium">No. Tanda Pengenal</p>
                          </div>
                          <div>Nama Pemesan</div>
                          <div>No. Handphone</div>
                          <div>Email</div>
                        </div>
                      </div>
                      <div></div>
                      <div className="col-span-4">
                        <div className="grid grid-cols-4 gap-2 text-[#B1B1B1]">
                          <div>{user?.id_user}</div>
                          <div>{user?.nama_lengkap}</div>
                          <div>{user?.telp}</div>
                          <div>{user?.email}</div>
                        </div>
                      </div>
                      <div className="-mt-2">
                        <Button
                          onClick={() => {
                            Swal.fire({
                              title: "Anda Yakin ?",
                              showDenyButton: true,
                              showCancelButton: true,
                              confirmButtonText: "Save",
                              denyButtonText: `Batal`,
                            }).then((result) => {
                              /* Read more about isConfirmed, isDenied below */
                              if (result.isConfirmed) {
                                Swal.fire("Saved!", "", "success");
                                window.location.assign(`/payment/${e?.id_transaksi}`)
                              } else if (result.isDenied) {
                                Swal.fire("Changes are not saved", "", "info");
                              }
                            });
                          }}
                          className="text-white font-semibold rounded px-6 py-1 bg-gradient-to-r from-g1 to-g2 w-full h-full"
                        >
                          Bayar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      )}
    </>
  );
}
