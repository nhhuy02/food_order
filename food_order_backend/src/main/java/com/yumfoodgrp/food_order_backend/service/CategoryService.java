package com.yumfoodgrp.food_order_backend.service;

import com.yumfoodgrp.food_order_backend.Exception.RestaurantException;
import com.yumfoodgrp.food_order_backend.model.Category;

import java.util.List;

public interface CategoryService {
	
	public Category createCategory (String name,Long userId) throws RestaurantException;
	public List<Category> findCategoryByRestaurantId(Long restaurantId) throws RestaurantException;
	public Category findCategoryById(Long id) throws RestaurantException;

}
