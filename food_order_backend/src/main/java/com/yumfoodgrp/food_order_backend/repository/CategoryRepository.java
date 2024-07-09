package com.yumfoodgrp.food_order_backend.repository;

import com.yumfoodgrp.food_order_backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {

	public List<Category> findByRestaurantId(Long id);
}
