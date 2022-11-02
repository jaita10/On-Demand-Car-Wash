package com.training.userservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.training.userservice.model.Car;
import com.training.userservice.repository.CarRepository;
import com.training.userservice.security.AuthenticationRequest;
import com.training.userservice.security.MyUserDetails;
import com.training.userservice.wrapper.CarList;
import com.training.userservice.wrapper.StringList;

@Service
public class CarServiceImpl implements CarService{
	
	@Autowired
	public CarRepository carRepo;
	
	@Autowired
	MongoTemplate mongoTemplate;
	
	@Autowired
	UserService userService;
	
	@Autowired
	RestTemplate restTemplate;
	
	public void setRepository(CarRepository carRepository) {
		this.carRepo = carRepository;
	}
	
	public boolean doesExist(String carId) {
		return carRepo.existsById(carId);
	}
	
	
	
	public void validateCar(Car car) throws Exception {
		try {
			car.validateCarTypes();
			car.validateCarNumber();
			car.validateCarColor();
		} catch (Exception e) {
			throw e;
		}
	}
	
	public String insertCar(Car car) {
		if(car.getCarId()!= null) {
			if (carRepo.existsById(car.getCarId())) {
				return "Car Already Exists";
			}			
		}
		try {
			validateCar(car);
			carRepo.save(car);
//			userService.addCarToUser(car.getCustomerId(), car.getCarId())  ;
			return "Car saved successfully";
		}catch(Exception e) {
			return e.getMessage();
		}
	}
	
	public CarList getAllCars() {
		List<Car> carList = carRepo.findAll();
		return new CarList(carList);
	}
	
	public String updateCar(Car car) {
		if (!carRepo.existsById(car.getCarId())) {
			return "Car with this Id does not Exist";
		}
		try {
			validateCar(car);
			carRepo.save(car);
			return "Car updated successfully";
		}catch(Exception e) {
			return e.getMessage();
		}
	}

	public String deleteCars(StringList stringList) {
		for (String carId : stringList.getStringList()) {
			if (!carRepo.existsById(carId))
				return "Cars with the mentioned ids does not exist" ;
		}
		carRepo.deleteAllById(stringList.getStringList());
		return "Cars with the mentioned ids are deleted successfully";
	}
	
	public MyUserDetails getUserByUsername(String username) {
        AuthenticationRequest authRequest = new AuthenticationRequest(username,"secretsarenevertobeshared");
        MyUserDetails userDetails = restTemplate
                .exchange( "http://api-gateway/users/getUserDetails" , HttpMethod.POST, new HttpEntity<Object>(authRequest), MyUserDetails.class)
                .getBody();
        return userDetails;
    }
	
	public String getTypeById(String id) {
		return carRepo.findByCarId(id).getCarType();
	}

}
