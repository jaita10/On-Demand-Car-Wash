package com.training.userservice.model;

import java.util.Arrays;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.training.userservice.exception.InvalidCarNumberException;
import com.training.userservice.exception.InvalidCarTypeException;
import com.training.userservice.exception.InvalidRoleException;

@Document(collection="CARS")
public class Car {
	
	@Id
	private String carId;
	private String customerId;
	private String carType;
	private String color;
	private String carNumber;
	
	private static List<String> validCarTypes = Arrays.asList("SEDAN" , "SUV" , "LUXURY" , "PREMIUM" , "EXOTIC" , "MUV" , "HATCHBACK" );
	
	public Car() {}

	public Car(String carId, String customerId, String carType, String color, String carNumber) {
		super();
		this.carId = carId;
		this.customerId = customerId;
		this.carType = carType;
		this.color = color;
		this.carNumber = carNumber;
	}

	public String getCarId() {
		return carId;
	}

	public void setCarId(String carId) {
		this.carId = carId;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getCarType() {
		return carType;
	}

	public void setCarType(String carType) {
		this.carType = carType;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getCarNumber() {
		return carNumber;
	}

	public void setCarNumber(String carNumber) {
		this.carNumber = carNumber;
	}
	
	
	
	
	public void validateCarTypes() throws InvalidCarTypeException{
		if(validCarTypes.contains(this.carType)) {
			return;
		}
		throw new InvalidCarTypeException(this.carType);
	}
	
	
	public void validateCarNumber() throws InvalidCarNumberException{
		if(this.carNumber.matches("^[A-Z]{2}[0-9]{4}$")) {
			return;
		}
		throw new InvalidCarNumberException(this.carNumber);
	}
	
	
	
	
	
	
	
	

}
