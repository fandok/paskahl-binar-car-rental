import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarDetail from "../cars/carDetail";
import FormFilterDetail from "../formFilter/formFilterDetail";
import Footer from "../home/footer";
import OurService from "../home/ourService";
import SidebarNav from "../home/sidebar/Sidebar";

const CarDetailPage = () => {
    const{ id }= useParams()
    const [dataDetail, setDataDetail]= useState()

    useEffect(()=>{
        getDetailCar()
    }, []);

    const getDetailCar = () => {
        axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
        .then((res)=>{
            setDataDetail(res.data)
        })
    }
    return (
    <>
      <SidebarNav />
      <OurService />
      <FormFilterDetail />
      <CarDetail dataDetail={dataDetail}/>
      <Footer />
    </>
  );
};

export default CarDetailPage;
