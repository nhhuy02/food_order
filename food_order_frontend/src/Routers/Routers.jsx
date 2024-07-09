import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import CustomerRoute from "./CustomerRoute"

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/restaurant/*" element={<AdminRoute/>}/>
        <Route path="/*" element={<CustomerRoute/>}/>
      </Routes>
    </>
  );
};

export default Routers;
