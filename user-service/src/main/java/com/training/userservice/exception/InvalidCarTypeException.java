package com.training.userservice.exception;

@SuppressWarnings("serial")
public class InvalidCarTypeException extends Exception {
	
	public InvalidCarTypeException(String carType) {
		super(carType+" is not a valid car type. ");
	}

}
