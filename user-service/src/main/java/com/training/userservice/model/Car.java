package com.training.userservice.model;

import java.util.Arrays;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.training.userservice.exception.InvalidCarColorException;
import com.training.userservice.exception.InvalidCarNumberException;
import com.training.userservice.exception.InvalidCarTypeException;

@Document(collection="CARS")
public class Car {
	
	@Id
	private String carId;
	private String customerId;
	private String carType;
	private String carColor;
	private String carNumber;
	
	private static List<String> validCarTypes = Arrays.asList("SEDAN" , "SUV" , "LUXURY" , "PREMIUM" , "EXOTIC" , "MUV" , "HATCHBACK" );
	
	public Car() {}

	public Car(String carId, String customerId, String carType, String carColor, String carNumber) {
		super();
		this.carId = carId;
		this.customerId = customerId;
		this.carType = carType;
		this.carColor = carColor;
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

	public String getCarColor() {
		return carColor;
	}

	public void setCarColor(String carColor) {
		this.carColor = carColor;
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
	
	
	public void validateCarColor() throws InvalidCarColorException{
		if(this.carColor.matches("^#[A-F0-9]{6}")) {
			return;
		}
		throw new InvalidCarColorException(this.carColor);
	}
	
	
	
	
	

}
