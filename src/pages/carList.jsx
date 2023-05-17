import axios from "axios";
import React, { useEffect, useState } from "react";
import CarIndex from "../cars/carIndex";
import FormFilter from "../formFilter/formFilter";
import Footer from "../home/footer";
import OurService from "../home/ourService";
import SidebarNav from "../home/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarList } from "../store";

const CarListPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.carListData;
  });

  useEffect(() => {
    fetchCarList(dispatch);
  }, [dispatch]);

  const filterForm = (params) => {
    // getData(params)
  };

  return (
    <>
      <SidebarNav />
      <OurService />
      <FormFilter filterForm={filterForm} />
      <CarIndex data={data} />
      <Footer />
    </>
  );
};
export default CarListPage;
