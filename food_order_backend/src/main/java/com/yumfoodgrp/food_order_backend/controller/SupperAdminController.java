package com.yumfoodgrp.food_order_backend.controller;

import com.yumfoodgrp.food_order_backend.model.User;
import com.yumfoodgrp.food_order_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SupperAdminController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/api/customers")
	public ResponseEntity<List<User>> getAllCustomers() {
		
		List<User> users =userService.findAllUsers();
		
		return new ResponseEntity<>(users,HttpStatus.ACCEPTED);

	}
	
	@GetMapping("/api/pending-customers")
	public ResponseEntity<List<User>> getPenddingRestaurantUser(){
		List<User> users=userService.getPenddingRestaurantOwner();
		return new ResponseEntity<List<User>>(users,HttpStatus.ACCEPTED);
		
	}
}
