package com.training.userservice.exception;

@SuppressWarnings("serial")
public class InvalidPhoneNumberException extends Exception{
	
	public InvalidPhoneNumberException(String phoneNumber) {
		super(phoneNumber+" is not a valid phone number .");
	}


}
