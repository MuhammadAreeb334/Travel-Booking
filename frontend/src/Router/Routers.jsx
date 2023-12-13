import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./../Pages/Home";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import SearchResultList from "./../Pages/SearchResultList";
import TourDetail from "../Pages/TourDetail";
import Tours from "./../Pages/Tours";
import ThankYou from "../Pages/ThankYou";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Thank-You" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
