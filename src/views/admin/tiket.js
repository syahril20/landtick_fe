import React, { useEffect, useState } from "react";
import Select from "react-select";
import { API_KERETA } from "../../config/api/api";
import { useDispatch, useSelector } from "react-redux";
import { getKeretaFunc } from "../../config/redux/action/kereta";
import { Button } from "@material-tailwind/react";
import { addTiketFunc, getTiketFunc, tiketFunc } from "../../config/redux/action/tiket";
export default function AddTiket({token}) {
  const [form, setForm] = useState({
    nama_kereta: "",
    id_kereta: 0,
    tanggal_berangkat: "",
    stasiun_berangkat: "",
    jam_berangkat: "",
    stasiun_tujuan: "",
    jam_tiba: "",
    harga: 0,
    qty: 0,
  });
  

  const [isClearable] = useState(true);
  const [isSearchable] = useState(true);
  const [isDisabled] = useState(false);
  const [isLoading] = useState(false);
  const [isRtl] = useState(false);
  const [stasiun, setStasiun] = useState();
  const getStasiun = () => {
    API_KERETA.get().then((res) => {
      setStasiun(res.data);
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getStasiun();
    dispatch(getKeretaFunc());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const kereta = state?.kereta?.kereta;
  const handleSubmit = (e) => {
    e.preventDefault();
    form.qty = parseInt(form.qty)
    form.harga = parseInt(form.harga)
    dispatch(addTiketFunc(form, token));
    console.log(form,"ini form");
  };
  return (
    <>
      <div className="mx-[10%] my-[5%]">
        <p className="text-2xl font-semibold mb-20">Tambah Tiket</p>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            placeholder="Nama Kereta"
            className="border-2 border-[#B1B1B1] rounded-md  p-2 w-full"
            onChange={(e) => {
              setForm({ ...form, nama_kereta: e.target.value });
              console.log(e.target.value);
            }}
            value={form.nama_kereta}
            type="text"
          />
          <Select
            className="border-2 border-[#B1B1B1] rounded-md"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="kereta"
            options={kereta?.map((e) => ({
              value: e.id_kereta,
              label: e.jenis_kereta,
            }))}
            onChange={(e) => {
              setForm({ ...form, id_kereta: e?.value });
              console.log(e?.value);
            }}
            placeholder="Jenis Kereta"
          />
          <input
            placeholder="Tanggal Berangkat"
            className="border-2 border-[#B1B1B1] rounded-md p-2 w-full"
            onChange={(e) => {
              setForm({ ...form, tanggal_berangkat: e?.target?.value });
              console.log(e?.target?.value);
            }}
            value={form.tanggal_berangkat}
            type="date"
          />
          <Select
            className="border-2 border-[#B1B1B1] rounded-md"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="stasiun"
            options={stasiun?.map((e) => ({
              value: e.city,
              label: e.city,
            }))}
            onChange={(e) => {
              setForm({ ...form, stasiun_berangkat: e?.value });
              console.log(e?.value);
            }}
            placeholder="Stasiun Berangkat"
          />
          <input
            placeholder="Jam Berangkat"
            className="border-2 border-[#B1B1B1] rounded-md p-2 w-full"
            onChange={(e) => {
              setForm({ ...form, jam_berangkat: e?.target?.value });
              console.log(e?.target?.value);
            }}
            value={form.jam_berangkat}
            type="time"
          />
          
          <Select
            className="border-2 border-[#B1B1B1] rounded-md"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="stasiun_tujuan"
            options={stasiun?.map((e) => ({
              value: e.city,
              label: e.city,
            }))}
            onChange={(e) => {
              setForm({ ...form, stasiun_tujuan: e?.value });
              console.log(e?.value);
            }}
            placeholder="Stasiun Tujuan"
          />
          <input
            placeholder="Jam Tiba"
            className="border-2 border-[#B1B1B1] rounded-md p-2 w-full"
            onChange={(e) => {
              setForm({ ...form, jam_tiba: e?.target?.value });
              console.log(e?.target?.value);
            }}
            value={form.jam_tiba}
            type="time"
          />
          <input
            placeholder="Harga"
            className="border-2 border-[#B1B1B1] rounded-md p-2 w-full"
            onChange={(e) => {
              setForm({ ...form, harga: e?.target?.value });
              console.log(e?.target?.value);
            }}
            value={form.harga}
            type="number"
          />
          <input
            placeholder="Qty"
            className="border-2 border-[#B1B1B1] rounded-md p-2 w-full"
            onChange={(e) => {
              setForm({ ...form, qty: e?.target?.value });
              console.log(e?.target?.value);
            }}
            value={form.qty}
            type="number"
          />
          <input type="number" onChange={((e)=>{
            console.log(e);
          })}/>
          <Button type="submit" className="h-7 text-white font-semibold rounded px-6 py-1  bg-gradient-to-r from-g1 to-g2">
           Save
          </Button>
        </form>
      </div>
    </>
  );
}
