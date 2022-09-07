package com.training.orderservice.service;

import static org.mockito.Mockito.mock;

import org.junit.jupiter.api.BeforeEach;

import com.training.orderservice.repository.OrderRepository;

class OrderServiceImplTest {

	OrderServiceImpl orderService;

	@BeforeEach
	void init() {
		OrderRepository mockOrderRepository = mock(OrderRepository.class);
		orderService = new OrderServiceImpl();
		orderService.setRepository(mockOrderRepository);
	}

	
	
	
}
