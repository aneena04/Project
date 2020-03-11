package com.cts.project.userservice;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepo  extends JpaRepository<User, Integer>  {
	
	
	User findByEmail(String email);
	
	User findByUsernameAndPassword(String username,String Password);

}
