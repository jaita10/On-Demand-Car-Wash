package com.training.userservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.userservice.model.User;
import com.training.userservice.service.UserService;

import ch.qos.logback.core.filter.Filter;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
	
	@GetMapping("/pass")
	public User pass(User user) {
		return user;
	}
	
	@GetMapping("/demoFilter")
	public Filter getFilter() {
		return null;
	}
	
}
