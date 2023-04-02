import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import mobil from "../../assets/img/mobil2.png";
import { Link, useParams } from "react-router-dom";

const OurService = () => {
  const params = window.location.pathname;
  const { id } = useParams()
  return (
    <>
      {params === "/carList" || id ? (
        <div className="headerCarList"></div>
      ) : (
        <div id="ourService" className="w-100 header d-block  pb-md-4 d-md-flex ">
          <div className="px-md-5 w-md-50  mt-md-5 mb-md-5 pt-5 ">
            <div className="mt-md-5  w-75 mx-3 mx-md-auto">
              <div className="w-full pe-4 ">
                <h2>
                  <strong>Sewa & Rental Mobil Terbaik di kawasan Medan</strong>
                </h2>
              </div>
              <p className="mt-3">
                <strong>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </strong>
              </p>
              {params === "/carList" ? (
                <div></div>
              ) : (
                <Button className="btn">
                  <Link className="text-white link" to="/carList">
                    Mulai Sewa Mobil
                  </Link>{" "}
                </Button>
              )}
            </div>
          </div>

          <div className="w-md-50">
            <img className=" mt-4 w-100 mobil h-100" src={mobil} alt="mobil" />
          </div>
        </div>
      )}

    </>
  );
};

export default OurService;
