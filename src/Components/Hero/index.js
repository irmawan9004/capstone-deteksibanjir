import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";
import kondisi_aman from "../../assets/image/aman_Kondisi Bendungan.png";
import kondisi_siaga from "../../assets/image/siaga_Kondisi Bendungan.png";
import kondisi_waspadai from "../../assets/image/waspada_Kondisi Bendungan.png";
import loading_state from "../../assets/image/load state.png";

export default function Hero() {
  const [kondisiAirSekarang, setKondisiAirSekarang] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://young-everglades-00873-d903e8dbc719.herokuapp.com/api/kondisiair"
      )
      .then((res) => {
        setKondisiAirSekarang(res.data.result[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return isLoading ? (
    <Image src={loading_state} fluid></Image>
  ) : (
    <Image
      src={
        kondisiAirSekarang.tinggi >= 170 ||
        kondisiAirSekarang.debit >= 100 ||
        kondisiAirSekarang.keruh >= 1000
          ? kondisi_waspadai
          : (kondisiAirSekarang.debit < 100 &&
              kondisiAirSekarang.debit >= 82) ||
            (kondisiAirSekarang.tinggi < 170 &&
              kondisiAirSekarang.tinggi >= 150) ||
            (kondisiAirSekarang.keruh < 1000 && kondisiAirSekarang.keruh >= 800)
          ? kondisi_siaga
          : kondisi_aman
      }
      fluid
    />
  );
}
