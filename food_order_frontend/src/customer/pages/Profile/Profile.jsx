import React from "react";
import ProfileNavigation from "../../component/ProfileNavigation/ProfileNavigation";
import { Route, Routes } from "react-router-dom";
import Order from "../Order/Order";
import UserAddress from "../UserAddress/UserAddress";
import Favorite from "../Favorite/Favorite";
import UserProfile from "./UserProfile";
import CustomerEvents from "./CustomerEvent";
import Notification from "./Notification";
import { Divider } from "@mui/material";

const Profile = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation />
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="lg:w-[80%]">
        <Routes>
        <Route path="/" element={<UserProfile/>} />
          <Route path="/orders" element={<Order/>} />
          <Route path="/address" element={<UserAddress/>} />
          <Route path="/favorites" element={<Favorite/>} />
          <Route path="/payments" element={<Order/>} />
          <Route path="/events" element={<CustomerEvents/>} />
          <Route path="/notification" element={<Notification/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
