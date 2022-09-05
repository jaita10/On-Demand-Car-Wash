package com.training.orderservice.service;

import com.training.orderservice.model.Order;
import com.training.orderservice.wrapper.OrderList;
import com.training.orderservice.wrapper.StringList;

public interface OrderService {
	
	public String insertOrder(Order order);

	public OrderList getAllOrders();

	public String updateOrder(Order order);

	public boolean deleteOrders(StringList stringList);

}
