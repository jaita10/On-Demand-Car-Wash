package com.training.userservice.service;

import static org.mockito.Mockito.mock;

import org.junit.jupiter.api.BeforeEach;

import com.training.userservice.repository.UserRepository;

class UserServiceImplTest {

	UserServiceImpl userService;

	@BeforeEach
	void init() {
		UserRepository mockUserRepository = mock(UserRepository.class);
		userService = new UserServiceImpl();
		userService.setRepository(mockUserRepository);
	}
	
	
	
	
	

}
