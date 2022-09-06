package com.training.userservice.model;

import java.util.Arrays;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.training.userservice.exception.InvalidEmailException;
import com.training.userservice.exception.InvalidPhoneNumberException;
import com.training.userservice.exception.InvalidRoleException;

@Document(collection="USER")
public class User {
	
	@Id
	private String userId;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String role;
	private String phoneNumber;
	
	private static List<String> validUserRoles = Arrays.asList("CUSTOMER" , "WASHER" , "ADMIN");
	
	public User() {}

	public User(String userId, String firstName, String lastName, String email, String password, String role,
			String phoneNumber) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
		this.phoneNumber = phoneNumber;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	
	
	public void validateRole() throws InvalidRoleException{
		if(validUserRoles.contains(this.role)) {
			return;
		}
		throw new InvalidRoleException(this.role);
	}
	
	
	public boolean validateRoles(){
		return validUserRoles.contains(this.role);
	}
	
	
	public void validateEmail() throws InvalidEmailException{
		if(this.email.matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")){
			return;
		}
		throw new InvalidEmailException(this.email);
	}
	
	
	public void validatePhoneNumber() throws InvalidPhoneNumberException{
		if(this.phoneNumber.matches("^[1-9][0-9]{9}$")) {
			return;
		}
		throw new InvalidPhoneNumberException(this.phoneNumber);
	}
	
	
	
	

}
