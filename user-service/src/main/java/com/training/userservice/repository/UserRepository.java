package com.training.userservice.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.training.userservice.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
	
	@Query(value = "{email: ?0}")
	public List<User> findByUsername(String username);   
	//we are running this query to get the user from the database using the given username that is the email
	

}
