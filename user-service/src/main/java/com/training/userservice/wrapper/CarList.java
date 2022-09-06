package com.training.userservice.wrapper;

import java.util.ArrayList;
import java.util.List;

import com.training.userservice.model.Car;

public class CarList {
	
	List<Car> carList = new ArrayList<>();

	public CarList() {}
	
	public CarList(List<Car> carList) {
		this.carList = carList;
	}
	
	public List<Car> getCarList() {
		return carList;
	}
	
	public void setCarList(List<Car> carList) {
		this.carList = carList;
	}
	
}
