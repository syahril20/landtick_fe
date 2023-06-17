import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFunc } from "../../../config/redux/action/auth";

export default function Login(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginFunc(form));
    setForm({
      username: "",
      password: "",
    });
  };
  
  return (
    <>
      <Dialog
        size="sm"
        open={props.openLog}
        handler={props.HanleLogin}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[20rem]">
          <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-g1 to-g2 text-[30px] text-center my-4">
            Login
          </p>
          <form onSubmit={HandleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <input
                placeholder="Username"
                className="border-2 border-[#B1B1B1] rounded-md p-2"
                onChange={(e) => {
                  setForm({ ...form, username: e.target.value });
                  console.log(e.target.value);
                }}
                value={form.username}
                type="text"
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
          <Typography variant="small" className="mt-6 flex justify-center ">
            Belum punya akun? klik
            <Typography
              as="a"
              variant="small"
              color="blue"
              className="ml-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-g1 to-g2 cursor-pointer"
              onClick={props.HandleRegister}
            >
              disini
            </Typography>
          </Typography>
        </Card>
      </Dialog>
    </>
  );
}
