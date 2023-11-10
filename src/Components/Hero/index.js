import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";
import kondisi_aman from "../../assets/image/aman_Kondisi Bendungan.png";
import kondisi_siaga from "../../assets/image/siaga_Kondisi Bendungan.png";
import kondisi_waspadai from "../../assets/image/waspada_Kondisi Bendungan.png";

export default function Hero() {
  const [kondisiAirSekarang, setKondisiAirSekarang] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/kondisiair")
      .then((res) => {
        setKondisiAirSekarang(res.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Image
      src={
        kondisiAirSekarang.tinggi >= 100 &&
        kondisiAirSekarang.debit >= 100 &&
        kondisiAirSekarang.keruh >= 100
          ? kondisi_waspadai
          : (kondisiAirSekarang.debit < 100 &&
              kondisiAirSekarang.debit >= 80) ||
            (kondisiAirSekarang.tinggi < 100 &&
              kondisiAirSekarang.tinggi >= 80) ||
            (kondisiAirSekarang.keruh < 100 && kondisiAirSekarang.keruh >= 80)
          ? kondisi_siaga
          : kondisi_aman
      }
      fluid
    />
  );
}