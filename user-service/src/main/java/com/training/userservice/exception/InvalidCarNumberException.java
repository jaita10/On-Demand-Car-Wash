package com.training.userservice.exception;

@SuppressWarnings("serial")
public class InvalidCarNumberException  extends Exception{
	
	public InvalidCarNumberException(String carNumber) {
		super(carNumber+" is not a valid car number. ");
	}

}
