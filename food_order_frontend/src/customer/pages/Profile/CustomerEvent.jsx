import React, { useEffect, useState } from "react";
import EventCard from "../../../admin/Events/EventCard";
// import { getAllEvents, getRestaurnatsEvents } from '../../../State/Customers/Restaurant/restaurant.action';
// import { useDispatch, useSelector } from 'react-redux';
// import EventCard from '../../../Admin/Events/EventCard';

const CustomerEvent = () => {
  //   const dispatch=useDispatch()
  //   const jwt=localStorage.getItem("jwt")

  //   const {restaurant,auth}=useSelector(store=>store);

  //   useEffect(()=>{
  //     dispatch(getAllEvents({jwt}))
  //   },[auth.jwt])
  return (
    <div className="mt-5 px-5 flex flex-wrap gap-5">
      {[1,1,1,1].map((item) => (
        <div>
            <EventCard/>
            </div>
      ))}
    </div>
  );
};

export default CustomerEvent;
