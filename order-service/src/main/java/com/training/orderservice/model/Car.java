package com.training.orderservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="CAR")
public class Car {
	
	@Id
	String carId;
	String carName;
	String carModel;
	String carNumber;

}
