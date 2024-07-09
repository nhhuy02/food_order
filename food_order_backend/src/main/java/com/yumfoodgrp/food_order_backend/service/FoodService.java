package com.yumfoodgrp.food_order_backend.service;

import com.yumfoodgrp.food_order_backend.Exception.FoodException;
import com.yumfoodgrp.food_order_backend.Exception.RestaurantException;
import com.yumfoodgrp.food_order_backend.model.Category;
import com.yumfoodgrp.food_order_backend.model.Food;
import com.yumfoodgrp.food_order_backend.model.Restaurant;
import com.yumfoodgrp.food_order_backend.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {

	public Food createFood(CreateFoodRequest req,Category category,
						   Restaurant restaurant) throws FoodException, RestaurantException;

	void deleteFood(Long foodId) throws FoodException;
	
	public List<Food> getRestaurantsFood(Long restaurantId,
			boolean isVegetarian, boolean isNonveg, boolean isSeasonal,String foodCategory) throws FoodException;
	
	public List<Food> searchFood(String keyword);
	
	public Food findFoodById(Long foodId) throws FoodException;

	public Food updateAvailibilityStatus(Long foodId) throws FoodException;
}
