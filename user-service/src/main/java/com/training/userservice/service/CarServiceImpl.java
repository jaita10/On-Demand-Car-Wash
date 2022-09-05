package com.training.userservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.userservice.repository.CarRepository;

@Service
public class CarServiceImpl implements CarService{
	
	@Autowired
	public CarRepository carRepo;
	
	
	public void setRepository(CarRepository carRepository) {
		this.carRepo = carRepository;
	}
	
	

}
