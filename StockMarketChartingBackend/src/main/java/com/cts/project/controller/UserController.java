package com.cts.project.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cts.project.bean.User;
import com.cts.project.dto.UserDTO;
import com.cts.project.repo.UserRepo;
import com.cts.project.service.UserService;

@CrossOrigin(origins = "*")
@RestController
public class UserController {
	@Autowired
	UserRepo ur;
	@Autowired
	UserService us;
	

	@GetMapping("/user")
	public List<User> findAll() {
		return ur.findAll();
	}

	@GetMapping("/user/{id}")
	public User findOne(@PathVariable int id) {
		Optional<User> usr = ur.findById(id);
		User us = usr.get();
		return us;
	}

	@PostMapping("/user")
	public ResponseEntity<UserDTO> save(@RequestBody UserDTO userDTO) {

//		User us = ur.save(us);
		us.insert(userDTO);
		return new ResponseEntity<UserDTO>(userDTO,HttpStatus.CREATED);
	}

	@DeleteMapping("/user/{id}")
	public void delete(@PathVariable int id) {
		ur.deleteById(id);
	}

	@PutMapping("/user")
	public User update(@RequestBody User usr) {
		User us = ur.save(usr);
		return us;
	}

	@PutMapping(value = "/users/activate")
	public String activateUser(@RequestBody String e) {
		String temp = e.split(":")[1];
		String email = temp.split("\"")[1];
		User user = ur.findByEmail(email);
		System.out.println(user);
		if (!user.isEnabled()) {
			user.setEnabled(true);
			System.out.println(ur.save(user));
			return "{\"result\":\"1\"}";
		} else
			return "{\"result\":\"0\"}";

	}
}
