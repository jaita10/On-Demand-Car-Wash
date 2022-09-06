package com.training.userservice.exception;

@SuppressWarnings("serial")
public class InvalidRoleException extends Exception{
	
	public InvalidRoleException(String role) {
		super(role+" is an invalid User role. ");
	}
	
}