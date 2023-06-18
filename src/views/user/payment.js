import React, { useEffect, useState } from "react";
import Error from "../../assets/error.png";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeletetransaksiFunc, getTransaksiFunc } from "../../config/redux/action/transaksi";
import { API, API_KERETA } from "../../config/api/api";
import backLogo from "../../assets/backLogo.png";
import whiteLogo from "../../assets/whiteLogo.png";
import qr from "../../assets/qr.png";
import {
  Button,
  Chip,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { AddOrder } from "../../config/redux/action/tiket";
export default function Payment({ token }) {
  const { id } = useParams();
  const state = useSelector((state) => state);
  console.log(state, state, "INI STATE");
  const dispatch = useDispatch();
  const order = state?.transaksi?.transaksi;
  const transaksi = order?.filter((e) => e.id_transaksi === parseInt(id));
  console.log(transaksi, id, "INI KIPAK");
  const [stasiun, setStasiun] = useState();
  const user = state?.user?.user;
  const getStasiun = () => {
    API_KERETA.get().then((res) => {
      setStasiun(res.data);
    });
  };

  const waw = (e) => {
    if (e?.pulang_pergi) {
      return "Pulang Pergi";
    }
  };
  useEffect(() => {
    getStasiun();
  }, []);

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const date = new Date();
  const orders = state?.tiket?.order;
  console.log(orders, "ORDER");

  const paym = async (e) => {


      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let a;
      if (e.pulang_pergi) {
        a =
          (e?.tiket?.harga * e.qty_dewasa +
            (e?.tiket?.harga * e.qty_anak) / 2) *
          2;
      } else {
        a = e?.tiket?.harga * e.qty_dewasa + (e?.tiket?.harga * e.qty_anak) / 2;
      }
      let data = {
        tanggal_transaksi: date,
        qty_dewasa: parseInt(e.qty_dewasa),
        qty_anak: parseInt(e.qty_anak),
        pulang_pergi: e.pulang_pergi,
        total: a,
        status: "pending",
        id_user: user.id_user,
        id_tiket: e?.tiket?.id_tiket,
      };
      dispatch(AddOrder(data));

      const body = JSON.stringify(data);
      console.log(data, "INI FORM");

      const response = await API.post("/transaksi", body, config);
      console.log("transaction success :", response);

      const tokens = response?.data?.data?.token
      window.snap.pay(tokens, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          Swal.fire("SUKSES MANTEP");
          dispatch(DeletetransaksiFunc(id, token))
          Navigate("/");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          Swal.fire(result);
          Navigate("/");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          Swal.fire(result);
          Navigate("/");
        },
        onClose: function () {
          /* You may add your own implementation here */
          Swal.fire("you closed the popup without finishing the payment");
        },
      });
  };
  return (
    <>
      <div className="mx-[5%] my-20">
        <p className="text-2xl">Invoice</p>
        <div className="flex justify-between mt-10">
          <div className="flex flex-col">
            <div className=" bg-[#EEEEEE] border-2 border-[#BBB] rounded-md flex max-w-[700px]">
              <div className="flex mx-10">
                <img src={Error} alt="WAW" className="my-16 mr-10" />
                <div className="mt-12">
                  <p className="mb-6">
                    Silakan melakukan pembayaran memalui M-Banking, E-Banking
                    dan ATM Ke No.rek Yang Tertera.
                  </p>
                  <p>No.rek : 09812312312</p>
                </div>
              </div>
            </div>

            <div className=" my-10 animate__animated animate__fadeInDown bg-white">
              {transaksi?.map((e) => {
                const berangkat = stasiun?.filter(
                  (s) => s?.city === e?.tiket?.stasiun_berangkat
                );
                const tujuan = stasiun?.filter(
                  (s) => s?.city === e?.tiket?.stasiun_tujuan
                );
                console.log(berangkat, tujuan);

                return (
                  <>
                    <div className="max-w-[700px]">
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
                        {/* <div className="text-right mr-[2%] mt-3">
                    <p className="text-2xl font-bold">KERETA API</p>
                    <p className="text-[#878787] text-sm">
                      <b>Saturday,</b> 21 Februari 2020
                    </p>
                  </div> */}

                        <div className="  mb-10 mt-20">
                          <div className="grid grid-cols-4 gap-2">
                            <div className="border-b-2 border-[#B7B7B7] col-span-4 pb-4">
                              <div className="ml-[4%] grid grid-cols-4 gap-2">
                                <div>
                                  <p className="font-medium">
                                    No. Tanda Pengenal
                                  </p>
                                </div>
                                <div>Nama Pemesan</div>
                                <div>No. Handphone</div>
                                <div>Email</div>
                              </div>
                            </div>
                            <div></div>
                            <div className="col-span-4">
                              <div className="ml-[4%] grid grid-cols-4 gap-2 text-[#B1B1B1]">
                                <div>{user?.id_user}</div>
                                <div>{user?.nama_lengkap}</div>
                                <div>{user?.telp}</div>
                                <div>{user?.email}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div>
              <p className="text-2xl">Rician Harga</p>
              {transaksi?.map((e) => {
                const a = e?.tiket?.harga * e?.qty_dewasa;
                const b = (e?.tiket?.harga * e?.qty_anak) / 2;

                return (
                  <>
                    <div className="bg-white border-2 border-[#B7B7B7] w-[446px] rounded-md">
                      <div className="flex my-6 justify-between mx-4">
                        <div className="flex flex-col">
                          <p className="mr-24">
                            {e?.tiket?.nama_kereta} (Dewasa) x{e?.qty_dewasa}
                          </p>
                          <p className="mr-24">
                            {e?.tiket?.nama_kereta} (Anak) x{e?.qty_anak}
                          </p>
                          <p className="mr-24">{waw(e)}</p>
                        </div>
                        <div>
                          <p>Rp. {a.toLocaleString("en-us")}</p>
                          <p>Rp. {b.toLocaleString("en-us")}</p>
                        </div>
                      </div>
                      <div className="bg-[#E6E6E6]">
                        <div className="py-2 flex justify-between mx-4 ">
                          <div className="flex flex-col ">
                            <p className="-semfontibold text-lg">Total</p>
                          </div>
                          <div>
                            <p className="-semfontibold text-lg">
                              Rp. {e?.total.toLocaleString("en-us")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[446px] mt-4">
                      <Button
                        onClick={() => {
                          paym(e);

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

                              // window.location.assign(`/payment/${e?.id_transaksi}`)
                            } else if (result.isDenied) {
                              Swal.fire("Changes are not saved", "", "info");
                            }
                          });
                        }}
                        className="text-white font-semibold rounded px-6 py-3 bg-gradient-to-r from-g1 to-g2 w-full h-full"
                      >
                        Bayar
                      </Button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div>
            <div className=" max-w-[447px] ml-10">
              <div className="bg-[#D0D0D0] rounded-t-md py-4 pl-10 pr-5 flex justify-between">
                <div>
                  <p className="text-3xl font-semibold mb-2">Kereta Api</p>
                  <p className="text-sm text-[#878787]">
                    <b>Saturday, </b>21 Februari 2020
                  </p>
                </div>
                <div className="-mt-1">
                  <img src={qr} alt="WAW" />
                  <p className="text-sm text-center">INV0101</p>
                </div>
              </div>
              <div className="bg-white rounded-b-md">
                {transaksi?.map((e) => {
                  const berangkat = stasiun?.filter(
                    (s) => s?.city === e?.tiket?.stasiun_berangkat
                  );
                  const tujuan = stasiun?.filter(
                    (s) => s?.city === e?.tiket?.stasiun_tujuan
                  );
                  return (
                    <div className="pl-10 pt-6 flex flex-col gap-5">
                      <div className="flex flex-col">
                        <div>
                          <p className="text-2xl font-semibold">
                            {e?.tiket?.nama_kereta}
                          </p>
                          <p className="text-base">
                            {e?.tiket?.jenis_kereta?.jenis_kereta}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-10">
                        <div className="">
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
                                  <p className="mb-1 font-semibold text-base">
                                    {e?.tiket?.jam_berangkat}
                                  </p>
                                  <p className="ml-[2px] text-[#959595] font-thin text-sm">
                                    21 Februari 2020
                                  </p>
                                </Typography>
                              </TimelineHeader>
                              <TimelineBody className="mb-20"></TimelineBody>
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
                                  <p className="mb-1 font-semibold text-base">
                                    {e?.tiket?.jam_tiba}
                                  </p>
                                  <p className="ml-[2px] text-[#959595] font-thin text-sm">
                                    21 Februari 2020
                                  </p>
                                </Typography>
                              </TimelineHeader>
                            </TimelineItem>
                          </Timeline>
                        </div>
                        <div className="flex flex-col mr-1">
                          <div className="mb-20">
                            {berangkat?.map((e) => {
                              return (
                                <>
                                  <p className="font-semibold text-sm">
                                    {e.cityname} ({e.code})
                                  </p>
                                  <p className="text-[#959595] text-sm">
                                    {e.name}
                                  </p>
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
                                  <p className="text-[#959595] text-sm">
                                    {e.name}
                                  </p>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
