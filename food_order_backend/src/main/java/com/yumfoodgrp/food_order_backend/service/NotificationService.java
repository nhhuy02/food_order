package com.yumfoodgrp.food_order_backend.service;

import com.yumfoodgrp.food_order_backend.model.Notification;
import com.yumfoodgrp.food_order_backend.model.Order;
import com.yumfoodgrp.food_order_backend.model.Restaurant;
import com.yumfoodgrp.food_order_backend.model.User;

import java.util.List;

public interface NotificationService {
	
	public Notification sendOrderStatusNotification(Order order);
	public void sendRestaurantNotification(Restaurant restaurant, String message);
	public void sendPromotionalNotification(User user, String message);
	
	public List<Notification> findUsersNotification(Long userId);

}
