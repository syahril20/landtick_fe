import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Navbar,
  Typography
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LT from "../../assets/LandTick.png";
import Train from "../../assets/Train.png";
import {
  logoutFunc
} from "../../config/redux/action/auth";
import { transaksiFunc } from "../../config/redux/action/transaksi";
import { userFunc } from "../../config/redux/action/user";
import Login from "./modal/login";
import Register from "./modal/register";

export default function Example({ token }) {
  const dispatch = useDispatch();

  const [openReg, setOpenReg] = useState(false);
  const [openLog, setOpenLog] = useState(false);
  const HandleRegister = () => {
    setOpenReg((reg) => !reg);
    setOpenLog(false);
  };
  const HanleLogin = () => {
    setOpenLog(!openLog);
    setOpenReg(false);
  };
  useEffect(() => {
    dispatch(transaksiFunc(token));
    dispatch(userFunc(token));
  }, [dispatch, token]);

 


  const Nav = useNavigate();
  const state = useSelector((state) => state);
  const login = state.auth;
  const user = state.user.user;
  console.log(user, "INI MEME");

  console.log(login, "CUK");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar className="sticky inset-0 z-20 h-full max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-1 shadow-md">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" className="mr-4 cursor-pointer py-1.5 font-medium">
            {login?.user?.role_id === 1 ? (
              <Link to="/admin">
                <div className="flex gap-3">
                  <img src={LT} alt="waw" />
                  <img src={Train} alt="waw" />
                </div>
              </Link>
            ) : (
              <Link to="/">
                <div className="flex gap-3">
                  <img src={LT} alt="waw" />
                  <img src={Train} alt="waw" />
                </div>
              </Link>
            )}
          </Typography>
          <div className="flex items-center gap-4">
            <div>
              {login?.user?.role_id === 1 ? (
                <div className="relative mx-auto flex items-center text-blue-gray-900">
                  <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block"></div>
                  <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-g1 to-g2 mr-5">
                    {user?.username}
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
                            Nav("/addTiket");
                          }}
                          className="flex items-center gap-4"
                        >
                          <img src="" alt="waw" />
                          <p className="font-bold text-black text-base">Tambah Tiket</p>
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
              ) : login?.user?.role_id === 2 ? (
                <div className="relative mx-auto flex items-center text-blue-gray-900">
                  <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block"></div>
                  <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-g1 to-g2 mr-5">
                    {user?.username}
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
                            Nav("/in-trip");
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

              <Register openReg={openReg} HandleRegister={HandleRegister} />

              {/* Login BUTTON */}
              <Login
                openLog={openLog}
                HanleLogin={HanleLogin}
                HandleRegister={HandleRegister}
              />
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
