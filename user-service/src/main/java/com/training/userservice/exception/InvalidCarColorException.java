package com.training.userservice.exception;

@SuppressWarnings("serial")
public class InvalidCarColorException  extends Exception{
	
	public InvalidCarColorException(String carColor) {
		super(carColor+" is not a valid car color. ");
	}

}