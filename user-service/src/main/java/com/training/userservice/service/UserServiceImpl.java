package com.training.userservice.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.training.userservice.model.User;
import com.training.userservice.repository.UserRepository;
import com.training.userservice.security.MyUserDetails;
import com.training.userservice.wrapper.StringList;
import com.training.userservice.wrapper.UserList;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	public UserRepository userRepo;

	@Autowired
	MongoTemplate mongoTemplate;

	private static Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

	public void setRepository(UserRepository userRepository) {
		this.userRepo = userRepository;
	}

	public boolean doesExists(String userId) {
		return userRepo.existsById(userId);
	}

	public void validateUser(User user) throws Exception {
		try {
			user.validateRole();
			user.validateEmail();
			user.validatePhoneNumber();
			logger.info(userRepo.findByUsername(user.getEmail()).toString());
		} catch (Exception e) {
			throw e;
		}
	}

	public void validateEmail(User user) throws Exception {
		if (userRepo.findByUsername(user.getEmail()).toString() != "[]") {
			throw new Exception("User with this email already exists");
		}
	}

	public String insertUser(User user) {
		if (user.getUserId() != null) {
			if (userRepo.existsById(user.getUserId())) {
				return "User Already Exists";
			}
		}
		try {
			validateUser(user);
			validateEmail(user);
			userRepo.save(user);
			return "User saved successfully";
		} catch (Exception e) {
			return e.getMessage();
		}
	}

	public UserList getAllUsers() {
		List<User> userList = userRepo.findAll();
		return new UserList(userList);
	}

	public String updateUser(User user) {
		if (!userRepo.existsById(user.getUserId())) {
			return "User with this Id does not Exist";
		}
		try {
			validateUser(user);
			userRepo.save(user);
			return "User updated successfully";
		} catch (Exception e) {
			return e.getMessage();
		}
	}

	public boolean deleteUsers(StringList stringList) {
		for (String userId : stringList.getStringList()) {
			if (!userRepo.existsById(userId))
				return false;
		}
		userRepo.deleteAllById(stringList.getStringList());
		return true;
	}

	public User getUserByUsername(String username) {
		List<User> userList = userRepo.findByUsername(username);
		if (userList.isEmpty()) {
			return null;
		}
		return userList.get(0);
	}

	public MyUserDetails getUserDetailsByUsername(String username) throws Exception {
		User user = getUserByUsername(username);
		return new MyUserDetails(user.getEmail(), user.getPassword(), user.getRole());
	}

}
