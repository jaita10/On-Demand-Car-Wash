package com.training.orderservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.orderservice.exceptions.BookedForThePastException;
import com.training.orderservice.exceptions.FeedbackNotPossibleException;
import com.training.orderservice.exceptions.InvalidStatusException;
import com.training.orderservice.exceptions.NoCompletionDateException;
import com.training.orderservice.model.Order;
import com.training.orderservice.repository.OrderRepository;
import com.training.orderservice.wrapper.OrderList;
import com.training.orderservice.wrapper.StringList;

@Service
public class OrderServiceImpl implements OrderService{
	
	@Autowired
	OrderRepository orderRepo;
	
	public void setRepository(OrderRepository orderRepository) {
		this.orderRepo = orderRepository;
	}
	
	public void validateOrder(Order order) throws Exception {
		if (!order.validateOrderStatus()) {
			throw new InvalidStatusException(order.getOrderStatus());
		}
		if (order.getCompletionTime() != null) {
			if ((order.getCompletionTime().isBefore(order.getBookingTime()))) {
				throw new BookedForThePastException();
			}
		} else {
			if (order.getOrderStatus().equals("COMPLETED")) {
				throw new NoCompletionDateException();
			}
		}
		
		if(!order.getOrderStatus().equals("COMPLETED")) {
			if(order.getCustomerFeedback() != null || order.getWasherFeedback() != null || order.getBucketsOfWaterUsed() != 0) {
				throw new FeedbackNotPossibleException();
			}
		}
		try {
			order.validateFeedbacks();
		} catch (Exception e) {
			throw e;
		}
	}

	
	public String insertOrder(Order order) {
		if(order.getOrderId()!= null) {
			if (orderRepo.existsById(order.getOrderId())) {
				return "Order Already Exists";
			}			
		}
		try {
			validateOrder(order);
			orderRepo.save(order);
			return "Order saved successfully";
		}catch(Exception e) {
			return e.getMessage();
		}
	}
	
	
	public OrderList getAllOrders() {
		List<Order> orderList = orderRepo.findAll();
		return new OrderList(orderList);
	}
	
	
	public String updateOrder(Order order) {
		if (!orderRepo.existsById(order.getOrderId())) {
			return "Order with this Id does not Exist";
		}
		try {
			validateOrder(order);
			orderRepo.save(order);
			return "Order updated successfully";
		}catch(Exception e) {
			return e.getMessage();
		}
	}

	public boolean deleteOrders(StringList stringList) {
		for (String orderId : stringList.getStringList()) {
			if (!orderRepo.existsById(orderId))
				return false;
		}
		orderRepo.deleteAllById(stringList.getStringList());
		return true;
	}

}
