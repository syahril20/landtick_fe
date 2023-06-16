import React, { useState } from "react";
import { registerFunc } from "../../../config/redux/action/auth";
import { useDispatch } from "react-redux";
import { Card, Dialog } from "@material-tailwind/react";

export default function Register(props) {
  const dispatch = useDispatch();

  const [formReg, setFormReg] = useState({
    nama_lengkap: "",
    username: "",
    email: "",
    password: "",
    jenis_kelamin: "",
    telp: "",
    alamat: "",
    id_role: 2,
  });
  const HandleRegist = (e) => {
    e.preventDefault();
    dispatch(registerFunc(formReg));
  };
  return (
    <>
      <Dialog
        size="xs"
        open={props.openReg}
        handler={props.HandleRegister}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <div className="relative w-full max-w-sm max-h-full">
            <div className=" bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="p-6 space-y-6 overflow-scroll no-scrollbar">
                <div className="my-10 h-[300px]">
                  <form className="flex flex-col gap-5" onSubmit={HandleRegist}>
                    <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-g1 to-g2 text-[30px] text-center my-4">
                      Register
                    </p>
                    <input
                      placeholder="Full Name"
                      className="border-2 border-[#B1B1B1] rounded-md p-2 text-lg w-full"
                      onChange={(e) => {
                        setFormReg({
                          ...formReg,
                          nama_lengkap: e.target.value,
                        });
                        console.log(e.target.value);
                      }}
                      value={formReg.nama_lengkap}
                      type="text"
                    />
                    <input
                      placeholder="Username"
                      className="border-2 border-[#B1B1B1] rounded-md p-2 text-lg w-full"
                      onChange={(e) => {
                        setFormReg({
                          ...formReg,
                          username: e.target.value,
                        });
                        console.log(e.target.value);
                      }}
                      value={formReg.username}
                      type="text"
                    />
                    <input
                      placeholder="Email"
                      className="border-2 border-[#B1B1B1] rounded-md p-2 text-lg w-full"
                      onChange={(e) => {
                        setFormReg({
                          ...formReg,
                          email: e.target.value,
                        });
                        console.log(e.target.value);
                      }}
                      value={formReg.email}
                      type="email"
                    />
                    <input
                      placeholder="Password"
                      className="border-2 border-[#B1B1B1] rounded-md p-2 text-lg w-full"
                      onChange={(e) => {
                        setFormReg({
                          ...formReg,
                          password: e.target.value,
                        });
                        console.log(e.target.value);
                      }}
                      value={formReg.password}
                      type="password"
                    />
                    <select
                      className="border-2 border-[#B1B1B1] rounded-md p-2 text-lg w-full"
                      onChange={(e) => {
                        setFormReg({
                          ...formReg,
                          jenis_kelamin: e.target.value,
                        });
                        console.log(e.target.value);
                      }}
                      value={formReg?.jenis_kelamin}
                    >
                      <option selected disabled value="">
                        Jenis Kelamin
                      </option>
                      <option>Laki - Laki</option>
                      <option>Perempuan</option>
                    </select>
                    <input
                      placeholder="Telepon"
                      className="border-2 border-[#B1B1B1] rounded-md p-2 text-lg w-full"
                      onChange={(e) => {
                        setFormReg({
                          ...formReg,
                          telp: e.target.value,
                        });
                        console.log(e.target.value);
                      }}
                      onWheel={(e) => e.target.blur()}
                      value={formReg.telp}
                      type="number"
                    />
                    <textarea
                      placeholder="Alamat"
                      className="border-2 border-[#B1B1B1] rounded-md overflow-hidden text-lg w-full resize-none"
                      onChange={(e) => {
                        setFormReg({
                          ...formReg,
                          alamat: e.target.value,
                        });
                        console.log(e.target.value);
                      }}
                      value={formReg.alamat}
                    />

                    <button className="text-center w-full bg-gradient-to-r from-g1 to-g2 mb-5 py-2 rounded-md text-white font-bold">
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Dialog>
    </>
  );
}
