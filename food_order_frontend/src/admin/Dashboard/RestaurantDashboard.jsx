import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenuItemsByRestaurantId } from "../../State/Customer/Menu/menu.action";
import { Grid } from "@mui/material";
import OrdersTable from "../Orders/OrderTable";
import MenuItemTable from "../Menu/MenuItemTable";


const RestaurantDashboard = () => {
  const { id } = useParams();
  const {restaurant}=useSelector(store=>store);
  console.log("restaurants id ", id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        restaurantId: id,
        jwt: localStorage.getItem("jwt"),
      })
    );
  }, []);

  console.log("restaurant",restaurant)
  return (
    <div className="px-2">
      <Grid container spacing={1}>
        <Grid lg={6} xs={12} item>
          <OrdersTable name={"Recent Order"} isDashboard={true} />
        </Grid>
        <Grid lg={6} xs={12} item>
          <MenuItemTable isDashboard={true} name={"Recently Added Menu"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantDashboard;
