package com.training.userservice.exception;

@SuppressWarnings("serial")
public class InvalidEmailException extends Exception{
	
	public InvalidEmailException(String email) {
		super(email+" is not a valid email address .");
	}

}
