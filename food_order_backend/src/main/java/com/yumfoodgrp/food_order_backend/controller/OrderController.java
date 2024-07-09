package com.yumfoodgrp.food_order_backend.controller;

import com.stripe.exception.StripeException;
import com.yumfoodgrp.food_order_backend.Exception.CartException;
import com.yumfoodgrp.food_order_backend.Exception.OrderException;
import com.yumfoodgrp.food_order_backend.Exception.RestaurantException;
import com.yumfoodgrp.food_order_backend.Exception.UserException;
import com.yumfoodgrp.food_order_backend.model.Order;
import com.yumfoodgrp.food_order_backend.model.PaymentResponse;
import com.yumfoodgrp.food_order_backend.model.User;
import com.yumfoodgrp.food_order_backend.request.CreateOrderRequest;
import com.yumfoodgrp.food_order_backend.service.OrderService;
import com.yumfoodgrp.food_order_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {
	@Autowired
	private OrderService orderService;
	@Autowired
	private UserService userService;
	
    @PostMapping("/order")
	public ResponseEntity<PaymentResponse>  createOrder(@RequestBody CreateOrderRequest order,
			@RequestHeader("Authorization") String jwt) 
					throws UserException, RestaurantException, 
					CartException, 
					StripeException,
					OrderException{
		User user=userService.findUserProfileByJwt(jwt);
		System.out.println("req user "+user.getEmail());
    	if(order!=null) {
			PaymentResponse res = orderService.createOrder(order,user);
			return ResponseEntity.ok(res);
			
    	}else throw new OrderException("Please provide valid request body");
		
    }
    
 
    
    @GetMapping("/order/user")
    public ResponseEntity<List<Order>> getAllUserOrders(@RequestHeader("Authorization") String jwt) throws OrderException, UserException{
    
    	User user=userService.findUserProfileByJwt(jwt);
    	
    	if(user.getId()!=null) {
    	List<Order> userOrders = orderService.getUserOrders(user.getId());
    	return ResponseEntity.ok(userOrders);
    	}else {
    		return new ResponseEntity<List<Order>>(HttpStatus.BAD_REQUEST);
    	}
    }
    

    

	
}
