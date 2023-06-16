import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Checkbox,
  CardFooter,
  Dialog,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
  MenuList,
  Menu,
  MenuHandler,
  Avatar,
  Textarea,
} from "@material-tailwind/react";
import React, { useState } from "react";
import LT from "../../assets/LandTick.png";
import Train from "../../assets/Train.png";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFunc,
  logoutFunc,
  registerFunc,
} from "../../config/redux/action/auth";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Example() {
  const [openReg, setOpenReg] = React.useState(false);
  const [openLog, setOpenLog] = React.useState(false);
  const HandleRegister = () => {
    setOpenReg(!openLog);
    setOpenLog(false);
  };
  const HanleLogin = () => {
    setOpenLog(!openLog);
    setOpenReg(false);
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
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

  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth);
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginFunc(form));
    setTimeout(() => {
      setForm({
        email: "",
        password: "",
      });
    }, 1000);
  };
  const HandleRegist = (e) => {
    e.preventDefault();
    dispatch(registerFunc(formReg));
  };

  console.log(login, "CUK");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Navi = useNavigate();

  return (
    <>
      <Navbar className="sticky inset-0 z-20 h-full max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-1 shadow-md">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <div className="flex gap-3">
              <img src={LT} alt="waw"/>
              <img src={Train} alt="waw"/>
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div>
              {login?.user?.role_id === 1 ? (
                <div className="relative mx-auto flex items-center text-blue-gray-900">
                  <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block"></div>
                  <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-g1 to-g2 mr-5">
                    {login.user.email}
                  </p>
                  <Menu
                    open={isMenuOpen}
                    handler={setIsMenuOpen}
                    placement="bottom-end"
                  >
                    <MenuHandler>
                      <Button
                        variant="text"
                        color="blue-gray"
                        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                      >
                        <Avatar
                          variant="circular"
                          size="sm"
                          alt="candice wu"
                          className=""
                          src=""
                        />
                      </Button>
                    </MenuHandler>
                    <MenuList className="flex flex-col gap-2 justify-start">
                      <div className="flex">
                        <button
                          onClick={() => {
                            Navi("/in-trip");
                          }}
                          className="flex items-center gap-4"
                        >
                          <img src="" alt="waw" />
                          <p className="font-bold text-black text-base">Trip</p>
                        </button>
                      </div>
                      <div className="border border-black w-full" />
                      <div className="flex">
                        <button
                          onClick={() => {
                            dispatch(logoutFunc());
                          }}
                          className="flex items-center gap-4"
                        >
                          <img src="" alt="waw" />
                          <p className="font-bold text-black text-base">
                            Logout
                          </p>
                        </button>
                      </div>
                    </MenuList>
                  </Menu>
                </div>
              ) : (
                <>
                  <button
                    onClick={HandleRegister}
                    className="text-white font-semibold border border-g1 rounded px-6 py-1"
                  >
                    <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-g1 to-g2">
                      Register
                    </p>
                  </button>
                  <button
                    onClick={HanleLogin}
                    className="text-white font-semibold rounded px-6 py-1 ml-2 bg-gradient-to-r from-g1 to-g2"
                  >
                    Login
                  </button>
                </>
              )}

              {/* Register BUTTON */}

              <Dialog
                size="xs"
                open={openReg}
                handler={HandleRegister}
                className="bg-transparent shadow-none"
              >
                <Card className="mx-auto w-full max-w-[24rem]">
                  <div className="relative w-full max-w-sm max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className=" bg-white rounded-lg shadow dark:bg-gray-700">
                      <div className="p-6 space-y-6 overflow-scroll no-scrollbar">
                        <div className="my-10 h-[300px]">
                          <form
                            className="flex flex-col gap-5"
                            onSubmit={HandleRegist}
                          >
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

              {/* Login BUTTON */}

              <Dialog
                size="sm"
                open={openLog}
                handler={HanleLogin}
                className="bg-transparent shadow-none"
              >
                <Card className="mx-auto w-full max-w-[20rem]">
                  <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-g1 to-g2 text-[30px] text-center my-4">
                    Login
                  </p>
                  <form onSubmit={HandleSubmit}>
                    <CardBody className="flex flex-col gap-4">
                      <input
                        placeholder="Email"
                        className="border-2 border-[#B1B1B1] rounded-md p-2"
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          console.log(e.target.value);
                        }}
                        value={form.email}
                        type="email"
                      />
                      <input
                        placeholder="Password"
                        className="border-2 border-[#B1B1B1] rounded-md p-2"
                        onChange={(e) => {
                          setForm({ ...form, password: e.target.value });
                          console.log(e.target.value);
                        }}
                        value={form.password}
                        type="password"
                      />
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Button
                        className="bg-gradient-to-r from-g1 to-g2 mt-10"
                        variant="gradient"
                        type="submit"
                        fullWidth
                      >
                        Sign In
                      </Button>
                    </CardFooter>
                  </form>
                  <Typography
                    variant="small"
                    className="mt-6 flex justify-center"
                  >
                    Belum punya akun? klik
                    <Typography
                      as="a"
                      variant="small"
                      color="blue"
                      className="ml-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-g1 to-g2"
                      onClick={() => {
                        setOpenLog(false);
                        setTimeout(() => {
                          setOpenReg(true);
                        }, 500);
                      }}
                    >
                      disini
                    </Typography>
                  </Typography>
                </Card>
              </Dialog>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
