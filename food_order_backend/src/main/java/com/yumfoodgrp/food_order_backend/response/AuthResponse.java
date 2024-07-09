package com.yumfoodgrp.food_order_backend.response;


import com.yumfoodgrp.food_order_backend.domain.USER_ROLE;
import lombok.Data;

@Data
public class AuthResponse {
	
	private String message;
	private String jwt;
	private USER_ROLE role;
	


}
