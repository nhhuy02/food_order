package com.yumfoodgrp.food_order_backend.service;

import com.yumfoodgrp.food_order_backend.model.PasswordResetToken;

public interface PasswordResetTokenService {

	public PasswordResetToken findByToken(String token);

	public void delete(PasswordResetToken resetToken);

}
