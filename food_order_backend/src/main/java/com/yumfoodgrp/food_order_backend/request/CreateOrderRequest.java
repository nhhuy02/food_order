package com.yumfoodgrp.food_order_backend.request;

import com.yumfoodgrp.food_order_backend.model.Address;
import lombok.Data;

@Data
public class CreateOrderRequest {
 
	private Long restaurantId;
	
	private Address deliveryAddress;
	
    
}
