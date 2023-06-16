import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { transaksiFunc } from '../../config/redux/action/transaksi';
import { Card, CardBody, Chip, Spinner, Typography } from '@material-tailwind/react';

const TABLE_HEAD = [
  "No",
  "Users",
  "Tiket",
  "Status Payment",
];

export default function Admin({token}) {
  // const [transaksi, setTransaksi] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(transaksiFunc(token));
  }, [dispatch]);

  const Transaksi = useSelector((state) => state.transaksi.transaksi);
  console.log(Transaksi, "INI ANJAY");
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
    {loading ? (
        <div className="flex justify-center mt-40">
          <Spinner className="h-12 w-12" />
        </div>
      ): 
      
     <div className="m-[10%]">
      <p className="text-3xl font-bold mb-3">Transaksi</p>
      <Card className="h-full w-full">
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className=" pb-4 px-4 border-b border-[#C4C4C4]"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Transaksi?.map((trans, idx) => {
                const classes = "p-4 border-b border-[#C4C4C4]";
                return (
                  <tr key={idx}>
                    <td className={`${classes} w-4`}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {idx + 1}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {trans?.user?.nama_lengkap}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {trans?.tiket?.stasiun_berangkat} - {trans?.tiket?.stasiun_tujuan}
                      </Typography>
                    </td>
                 
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={trans?.status}
                          color={
                            trans?.status === "success"
                              ? "green"
                              : trans?.status === "pending"
                              ? "yellow"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      
    </div> 
      }

    </>
  )
}
