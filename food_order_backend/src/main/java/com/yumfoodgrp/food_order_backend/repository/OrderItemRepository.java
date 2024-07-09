package com.yumfoodgrp.food_order_backend.repository;

import com.yumfoodgrp.food_order_backend.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
