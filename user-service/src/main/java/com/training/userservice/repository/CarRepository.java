package com.training.userservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.training.userservice.model.Car;

@Repository
public interface CarRepository extends MongoRepository<Car, String> {

}
