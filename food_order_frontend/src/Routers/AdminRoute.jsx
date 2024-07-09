import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateRestaurantForm from "../admin/AddRestaurant/CreateRestaurantForm";
import Admin from "../admin/Admin";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { auth, restaurant } = useSelector((store) => store);
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            !restaurant.usersRestaurant ? <CreateRestaurantForm /> : <Admin />
          }
        />
      </Routes>
    </div>
  );
};

export default AdminRoute;
