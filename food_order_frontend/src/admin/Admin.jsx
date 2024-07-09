import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "./AdminSideBar";
import RestaurantDashboard from "./Dashboard/RestaurantDashboard";
import RestaurantOrder from "./Orders/RestaurantOrder";
import Menu from "./Menu/Menu";
import Events from "./Events/Events";
import Details from "./Details/Details";
import Category from "./Category/Category";
import Ingredients from "./Ingredients/Ingredient";
import CreateMenuForm from "./Menu/CreateMenuForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantsOrder } from "../State/Admin/Order/restaurant.order.action";
import { getIngredientCategory, getIngredientsOfRestaurant } from "../State/Admin/Ingredient/Action";
import { getRestaurantsCategory } from "../State/Customer/Restaurant/restaurant.action";

const Admin = () => {
  const dispatch = useDispatch();
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => setOpenSideBar(true);
  const handleCloseSideBar = () => setOpenSideBar(false);
  const { auth, restaurant, ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (restaurant.usersRestaurant) {
      dispatch(
        getIngredientCategory({ jwt, id: restaurant.usersRestaurant?.id })
      );
      dispatch(
        getIngredientsOfRestaurant({ jwt, id: restaurant.usersRestaurant?.id })
      );
      dispatch(
        getRestaurantsCategory({
          jwt: auth.jwt || jwt,
          restaurantId: restaurant.usersRestaurant?.id,
        })
      );

      dispatch(
        fetchRestaurantsOrder({
          restaurantId: restaurant.usersRestaurant?.id,
          jwt: auth.jwt || jwt,
        })
      );
    }
  }, [restaurant.usersRestaurant]);
  return (
    <div>
      <AdminNavbar />
      <div className="lg:flex justify-between">
        <div className="">
          <AdminSidebar/>
        </div>

        <div className="lg:w-[80vw]">
          <Routes>
            <Route path="/" element={<RestaurantDashboard />} />
            <Route path="/orders" element={<RestaurantOrder />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/add-menu" element={<CreateMenuForm />} />
            {/* <Route path="/add-restaurant" element={<CreateRestaurantForm />} /> */}
            <Route path="/event" element={<Events />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/category" element={<Category />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
