package com.training.userservice.service;

import java.util.Optional;

import com.training.userservice.model.User;
import com.training.userservice.wrapper.StringList;
import com.training.userservice.wrapper.UserList;

public interface UserService {
	
	public boolean doesExists(String userId);
	
	public String insertUser(User user) ;
	
	public UserList getAllUsers();
	
	public String updateUser(User user);

	public boolean deleteUsers(StringList stringList);
	
	public User getUserByUsername(String username);
	


}
