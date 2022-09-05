package com.training.orderservice.wrapper;

import java.util.ArrayList;
import java.util.List;

import com.training.orderservice.model.Order;

public class OrderList {
	
	public List<Order> orderList = new ArrayList<>();

	public OrderList() {}

	public OrderList(List<Order> orderList) {
		super();
		this.orderList = orderList;
	}

	public List<Order> getOrderList() {
		return orderList;
	}

	public void setOrderList(List<Order> orderList) {
		this.orderList = orderList;
	}
	
	

}
