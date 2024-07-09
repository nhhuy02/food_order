package com.yumfoodgrp.food_order_backend.service;

import com.stripe.exception.StripeException;
import com.yumfoodgrp.food_order_backend.Exception.CartException;
import com.yumfoodgrp.food_order_backend.Exception.OrderException;
import com.yumfoodgrp.food_order_backend.Exception.RestaurantException;
import com.yumfoodgrp.food_order_backend.Exception.UserException;
import com.yumfoodgrp.food_order_backend.model.Order;
import com.yumfoodgrp.food_order_backend.model.PaymentResponse;
import com.yumfoodgrp.food_order_backend.model.User;
import com.yumfoodgrp.food_order_backend.request.CreateOrderRequest;

import java.util.List;

public interface OrderService {
	
	 public PaymentResponse createOrder(CreateOrderRequest order, User user) throws UserException, RestaurantException, CartException, StripeException;
	 
	 public Order updateOrder(Long orderId, String orderStatus) throws OrderException;
	 
	 public void cancelOrder(Long orderId) throws OrderException;
	 
	 public List<Order> getUserOrders(Long userId) throws OrderException;
	 
	 public List<Order> getOrdersOfRestaurant(Long restaurantId,String orderStatus) throws OrderException, RestaurantException;
	 

}
