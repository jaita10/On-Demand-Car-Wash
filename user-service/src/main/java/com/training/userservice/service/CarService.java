package com.training.userservice.service;

import com.training.userservice.model.Car;
import com.training.userservice.security.MyUserDetails;
import com.training.userservice.wrapper.CarList;
import com.training.userservice.wrapper.StringList;

public interface CarService {
	
	public boolean doesExist(String carId);
	
	public String insertCar(Car car);
	
	public CarList getAllCars();
	
	public String updateCar(Car car);

	public String deleteCars(StringList stringList);
	
	public MyUserDetails getUserByUsername(String username) ;
	
	public String getTypeById(String id);

}
