package com.training.orderservice.model;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

import com.training.orderservice.exceptions.RatingOutOfRangeException;
import com.training.orderservice.wrapper.StringList;

@Document(collection="ORDER")
public class Order {
	
	@Id
	private String orderId;
	private String carId;
	private String washPackId;
	private double amount;
	private StringList addOnIdList;
	
	@Field(targetType = FieldType.DATE_TIME)
	private LocalDateTime bookingTime;
	@Field(targetType = FieldType.DATE_TIME)
	private LocalDateTime completionTime;
	
	private String orderStatus;
	
	private Location location;
	
	private String washerId;
	
	private Feedback customerFeedback;	
	private Feedback washerFeedback;
	
	private int bucketsOfWaterUsed;
	
	private static List<String> validOrderStatus =  Arrays.asList( "PENDING" , "IN_PROCESS" , "COMPLETED" , "CANCELLED" , "TERMINATED" );
	//cancelled by customer, terminated by admin
	
	// Custom Constructor
		public Order(String carId, String washPackId,StringList addOnIdList, double amount, Location location , LocalDateTime completionTime) {
			
			this.carId = carId;
			this.washPackId = washPackId;
			this.addOnIdList = addOnIdList;
			this.amount = amount;
			this.location = location;
			
			this.bookingTime = LocalDateTime.now();
			this.orderStatus = "PENDING";
			this.washerId = null;
			this.completionTime = null;
			this.customerFeedback = null;
			this.washerFeedback = null;
			this.bucketsOfWaterUsed = 0;
		}
	
	public Order() {}

	public Order(String orderId, String carId, String washPackId, double amount, StringList addOnIdList,
			LocalDateTime bookingTime, LocalDateTime completionTime, String orderStatus, Location location,
			String washerId, Feedback customerFeedback, Feedback washerFeedback, int bucketsOfWaterUsed) {
		super();
		this.orderId = orderId;
		this.carId = carId;
		this.washPackId = washPackId;
		this.amount = amount;
		this.addOnIdList = addOnIdList;
		this.bookingTime = bookingTime;
		this.completionTime = completionTime;
		this.orderStatus = orderStatus;
		this.location = location;
		this.washerId = washerId;
		this.customerFeedback = customerFeedback;
		this.washerFeedback = washerFeedback;
		this.bucketsOfWaterUsed = bucketsOfWaterUsed;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getCarId() {
		return carId;
	}

	public void setCarId(String carId) {
		this.carId = carId;
	}

	public String getWashPackId() {
		return washPackId;
	}

	public void setWashPackId(String washPackId) {
		this.washPackId = washPackId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public StringList getAddOnIdList() {
		return addOnIdList;
	}

	public void setAddOnIdList(StringList addOnIdList) {
		this.addOnIdList = addOnIdList;
	}

	public LocalDateTime getBookingTime() {
		return bookingTime;
	}

	public void setBookingTime(LocalDateTime bookingTime) {
		this.bookingTime = bookingTime;
	}

	public LocalDateTime getCompletionTime() {
		return completionTime;
	}

	public void setCompletionTime(LocalDateTime completionTime) {
		this.completionTime = completionTime;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public String getWasherId() {
		return washerId;
	}

	public void setWasherId(String washerId) {
		this.washerId = washerId;
	}

	public Feedback getCustomerFeedback() {
		return customerFeedback;
	}

	public void setCustomerFeedback(Feedback customerFeedback) {
		this.customerFeedback = customerFeedback;
	}

	public Feedback getWasherFeedback() {
		return washerFeedback;
	}

	public void setWasherFeedback(Feedback washerFeedback) {
		this.washerFeedback = washerFeedback;
	}

	public int getBucketsOfWaterUsed() {
		return bucketsOfWaterUsed;
	}

	public void setBucketsOfWaterUsed(int bucketsOfWaterUsed) {
		this.bucketsOfWaterUsed = bucketsOfWaterUsed;
	}

	public boolean validateOrderStatus(){
		return validOrderStatus.contains(this.orderStatus);
	}
	
	public void validateFeedbacks() throws RatingOutOfRangeException{
		if(this.customerFeedback != null && !this.customerFeedback.validateRating()) {
			throw new RatingOutOfRangeException("customer");			
		}
		if(this.washerFeedback != null && !this.washerFeedback.validateRating()) {
			throw new RatingOutOfRangeException("washer");
		}
	}
	
	
	
}
