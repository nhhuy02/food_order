package com.yumfoodgrp.food_order_backend.repository;

import com.yumfoodgrp.food_order_backend.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
