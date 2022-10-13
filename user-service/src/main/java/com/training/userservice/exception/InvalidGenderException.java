package com.training.userservice.exception;

@SuppressWarnings("serial")
public class InvalidGenderException extends Exception{
	
	public InvalidGenderException(String gender) {
		super(gender+" is an invalid Gender role. ");
	}
	
}