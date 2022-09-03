package com.training.orderservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="ORDER")
public class Order {
	
	@Id
	String orderId;
	String orderStatus;
	String washerName;
	String washpack;
	long orderPayment;
	String orderReceipt;
	int bucketsOfWater;
	int DateTime;
	
	
	Car car;
	
	
	
	
	
	

}
