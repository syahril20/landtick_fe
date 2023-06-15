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
} from "@material-tailwind/react";
import React, { useState } from "react";
import LT from "../../assets/LandTick.png";
import Train from "../../assets/Train.png";
import { useDispatch, useSelector } from "react-redux";
import { loginFunc, logoutFunc } from "../../config/redux/action/auth";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Example() {
  const [openReg, setOpenReg] = React.useState(false);
  const [openLog, setOpenLog] = React.useState(false);
  const HandleRegister = () => setOpenReg((cur) => !cur);
  const HanleLogin = () => setOpenLog((cur) => !cur);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginFunc(form));
  };
  const login = useSelector((state) => state.auth);
  console.log(login.user, "CUK");

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
              <img src={LT} />
              <img src={Train} />
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div>
              {login?.user?.role_id === 1 ? (
                <div className="relative mx-auto flex items-center text-blue-gray-900">
                  <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block"></div>

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
                        <ChevronDownIcon
                          strokeWidth={2.5}
                          className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                          }`}
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
                  <form>
                    <CardBody className="h-full max-h-[24rem] flex flex-col gap-4 overflow-auto">
                      <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-g1 to-g2 text-[30px] text-center my-4">
                        Register
                      </p>
                      <input
                        placeholder="Email"
                        className="border-2 border-[#B1B1B1] rounded-md p-2"
                      />
                      <input
                        placeholder="Password"
                        className="border-2 border-[#B1B1B1] rounded-md p-2"
                      />
                      <input
                        placeholder="Email"
                        className="border-2 border-[#B1B1B1] rounded-md p-2"
                      />
                      <input
                        placeholder="Email"
                        className="border-2 border-[#B1B1B1] rounded-md p-2"
                      />
                      <input
                        placeholder="Email"
                        className="border-2 border-[#B1B1B1] rounded-md p-2"
                      />
                      <input
                        placeholder="Email"
                        className="border-2 border-[#B1B1B1] rounded-md p-2"
                      />
                      <input
                        placeholder="Email"
                        className="border-2 border-[#B1B1B1] rounded-md p-2"
                      />
                      <Button
                        className="bg-gradient-to-r from-g1 to-g2 mt-10"
                        variant="gradient"
                        onClick={HandleRegister}
                        fullWidth
                      >
                        Register
                      </Button>
                    </CardBody>
                  </form>
                </Card>
              </Dialog>

              {/* Login BUTTON */}

              <Dialog
                size="sm"
                open={openLog}
                handler={HanleLogin}
                className="bg-transparent shadow-none"
              >
                <Card className="mx-auto w-full max-w-[20rem]" tabindex="-1">
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
