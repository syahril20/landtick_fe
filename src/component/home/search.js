import { Button, Tab, Tabs, TabsBody } from "@material-tailwind/react";
import React from "react";
import swap from "../../assets/Swap.png";
import trainLogo from "../../assets/trainLogo.png";
export default function Search() {
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
                            <option value={0}>0</option>
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
    </>
  );
}
