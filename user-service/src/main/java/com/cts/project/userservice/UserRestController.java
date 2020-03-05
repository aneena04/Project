package com.cts.project.userservice;
import java.util.List;
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
	@GetMapping("/user")
	//public List<User> getUsers() {
	    public ResponseEntity<?> getUsers() {
		List<User> list=userService.getAll();
		if(list.size()>0)
		{
			return new ResponseEntity<List<User>>(list,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("Not Found",HttpStatus.NOT_FOUND);
		}
		//return userService.getAllUsers();
	}
	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable("id") int id) {
		//Optional<User> userList = userDao.findById(id);
		//User user = userList.get();
		return userService.getById(id);
	}
	@PostMapping("/user")
	public User saveUser(@RequestBody User user) {
		return userService.save(user);
	}
	@DeleteMapping("/user/{id}")
	public void deleteUser(@PathVariable int id) {
		userService.remove(id);
	}
	@PutMapping("/user")
	public User updateUser(@RequestBody User user) {
		return userService.update(user);
	}
	@PutMapping(value="/activate")
	public User activateUser(@RequestBody String email) {
		return userService.activateUser(email);
	}
	@GetMapping("/company-by-user")
	public List<CompanyDTO >getCompanyByStockpriceAll() {
		return proxy.findAll();
	}

}