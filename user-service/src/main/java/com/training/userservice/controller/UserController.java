package com.training.userservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.userservice.model.Car;
import com.training.userservice.model.User;
import com.training.userservice.security.AuthenticationRequest;
import com.training.userservice.security.AuthenticationResponse;
import com.training.userservice.security.JwtUtil;
import com.training.userservice.service.CarService;
import com.training.userservice.service.UserService;
import com.training.userservice.wrapper.CarList;
import com.training.userservice.wrapper.StringList;
import com.training.userservice.wrapper.UserList;

import ch.qos.logback.core.filter.Filter;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	CarService carService;
	
	
	@GetMapping("/pass")
	public User pass(User user) {
		return user;
	}
	
	@GetMapping("/demoFilter")
	public Filter getFilter() {
		return null;
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<String> insertUser(@RequestBody User user){
		String saved = userService.insertUser(user);
		if(saved.equals("User saved successfully")) {
			return new ResponseEntity<String>(saved,HttpStatus.CREATED);
		}
		return new ResponseEntity<String>(saved,HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/list")
	public UserList getAllUsers() {
		return userService.getAllUsers();
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateUser(@RequestBody User user){
		String updated = userService.updateUser(user);
		if(updated == "User updated successfully") {
			return new ResponseEntity<String>(updated, HttpStatus.OK);
		}
		return new ResponseEntity<String>(updated, HttpStatus.BAD_REQUEST);
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteUsers(@RequestBody StringList stringList){
		boolean deleted = userService.deleteUsers(stringList);
		if(deleted) {
			return new ResponseEntity<String>("Users deleted successfully", HttpStatus.OK);
		}
		return new ResponseEntity<String>("User with one of these Ids does not exist", HttpStatus.BAD_REQUEST);
	}
	
	
	
	
	
	
	@PostMapping("/car/add")
	public ResponseEntity<String> insertCar(@RequestBody Car car){
		String saved = carService.insertCar(car);
		if(saved.equals("Car saved successfully")) {
			return new ResponseEntity<String>(saved,HttpStatus.CREATED);
		}
		return new ResponseEntity<String>(saved,HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/car/list")
	public CarList getAllCars() {
		return carService.getAllCars();
	}
	
	@PutMapping("/car/update")
	public ResponseEntity<String> updateCar(@RequestBody Car car){
		String updated = carService.updateCar(car);
		if(updated == "Car updated successfully") {
			return new ResponseEntity<String>(updated, HttpStatus.OK);
		}
		return new ResponseEntity<String>(updated, HttpStatus.BAD_REQUEST);
	}
	
	@DeleteMapping("/car/delete")
	public ResponseEntity<String> deleteCars(@RequestBody StringList stringList){
		String deleted = carService.deleteCars(stringList);
		if(deleted.equals("Cars deleted successfully")) {
			return new ResponseEntity<String>(deleted, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Car with one of these Ids does not exist", HttpStatus.BAD_REQUEST);
	}
	
	
	
	
	
	
	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest authenticationRequest)
			throws Exception {

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		} catch (BadCredentialsException e) {
//			throw new Exception("Incorrect Username or Password" , e);
			return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse("Failed"),
					HttpStatus.FORBIDDEN);
		}

		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		final String jwt = jwtUtil.generateToken(userDetails);
		return new ResponseEntity<AuthenticationResponse>(new AuthenticationResponse(jwt), HttpStatus.OK);
	}
	
	
	

	
	
}
