package com.yumfoodgrp.food_order_backend.service;

import com.stripe.exception.StripeException;
import com.yumfoodgrp.food_order_backend.model.Order;
import com.yumfoodgrp.food_order_backend.model.PaymentResponse;

public interface PaymentService {
	
	public PaymentResponse generatePaymentLink(Order order) throws StripeException;

}
