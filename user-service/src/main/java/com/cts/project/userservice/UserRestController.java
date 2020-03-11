package com.cts.project.userservice;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.NoSuchElementException;

import javax.servlet.http.HttpServletRequest;
import javax.websocket.server.PathParam;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.userservice.feign.CompanyServiceProxy;

@CrossOrigin(origins = "*")
@RestController
public class UserRestController {

	@Autowired
	private CompanyServiceProxy proxy;

	@Autowired
	UserService userService;

	/*
	 * @Autowired JavaMailSender jms;
	 */
	
	
	Logger logger=LoggerFactory.getLogger(this.getClass());
	
	@GetMapping("/user")
	// public List<User> getUsers() {
	public ResponseEntity<?> getUsers() {
		List<User> list = userService.getAll();
		if (list.size() > 0) {
			return new ResponseEntity<List<User>>(list, HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Not Found", HttpStatus.NOT_FOUND);
		}
		// return userService.getAllUsers();
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<?> getUserById(@PathVariable("id") int id) {
		// Optional<User> userList = userDao.findById(id);
		try {
			User user = userService.getById(id);
			return new ResponseEntity<User>(user, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<String>("No such user found\n" + e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping("/user")
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		return new ResponseEntity<User>(userService.save(user), HttpStatus.OK);
	}

	@DeleteMapping("/user/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable int id) {
		try {
			userService.remove(id);
			return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
		} catch (IllegalArgumentException e) {
			return new ResponseEntity<String>("No such user found", HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping("/user")
	public ResponseEntity<?> updateUser(@RequestBody User user) {
		return new ResponseEntity<User>(userService.update(user), HttpStatus.OK);
	}
	
	@GetMapping(value = "/user/activate/{email}")
	public ResponseEntity<?> activateUser(@PathVariable String email) {
		try {
			User status = userService.activateUser(email);
			return new ResponseEntity<User>(status, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<String>("No such e-mail assigned", HttpStatus.BAD_REQUEST);
		}
	}
	
	
	@GetMapping("/login")
	public ResponseEntity<?> login(HttpServletRequest request) {
		String authorization =request.getHeader("Authorization");
		logger.info("Login attempt with tooken--> {}",authorization);
		String username=null;
		String password=null;
		if(authorization!=null && authorization.startsWith("Basic")) {
			String base64Credentials=authorization.substring("Basic".length()).trim();
			byte[] credDecoded=Base64.getDecoder().decode(base64Credentials);
			String credentials=new String(credDecoded,StandardCharsets.UTF_8);
			username=credentials.split(":")[0];
			password=credentials.split(":")[1];
		}
		try {
			UserDTO user=userService.getUserByUsernameAndPassword(username,password);
			logger.info("User Logged in Using Username--> {}",username);
			return new ResponseEntity<UserDTO>(user,HttpStatus.OK);
		}
		catch(Exception e) {
				System.out.println(e.getStackTrace());
				logger.info("Unauthorized Access --->{}",e.getStackTrace().toString());
				return new ResponseEntity<String>("No user found",HttpStatus.NOT_FOUND);
		}
	}
	


//	@GetMapping("/company-by-user")
//	public List<CompanyDTO> getCompanyByStockpriceAll() {
//		return proxy.findAll();
//	}

}