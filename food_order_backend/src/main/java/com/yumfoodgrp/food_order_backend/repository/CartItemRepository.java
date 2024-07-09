package com.yumfoodgrp.food_order_backend.repository;

import com.yumfoodgrp.food_order_backend.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


//    CartItem findByFoodIsContaining

}
