package com.cts.project.userservice;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepo userRepo;

	@Autowired
	JavaMailSender jms;

	@Override
	public User save(User user) {
		userRepo.save(user);
		try {
			SimpleMailMessage sm = new SimpleMailMessage();
			sm.setFrom("babymol.bobby@gmail.com");
			sm.setTo(user.getEmail());
			sm.setSubject("Testing Mail");
			sm.setText(
					"Hi" + user.getName() + "Account created click on <a href='http://localhost:4200/activate-user?"
							+ user.getEmail() + "'>Click</a>");
			jms.send(sm);
			System.out.println("Sending Mail");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return user;
	}

	@Override
	public void remove(int id) {
		userRepo.deleteById(id);
	}

	@Override
	public User update(User user) {
		
		return userRepo.save(user);
	}

	@Override
	public User getById(int id) {
		Optional<User> user = userRepo.findById(id);
	return	user.orElse(new User());
		
	}

	@Override
	public List<User> getAll() {
	return userRepo.findAll();
		
	}

	@Override
	public User activateUser(String email) {
		return userRepo.findByEmail(email);
				
	}
	
	@Override
	public String alter(User user) {
		User users = new User();
		
		if(getById(user.getId()).isEnabled()) {
			user.setEnabled(true);
		}
		BeanUtils.copyProperties(user, users);
		users=userRepo.save(users);
		if(users!=null) {
		return "{\"res\":\"1\"}";}
		else {
			return "{\"res\":\"0\"}";
		}
	}

	@Override
	public UserDTO getUserByUsernameAndPassword(String username, String password) throws NoSuchElementException{
		User user = userRepo.findByUsernameAndPassword(username, password);
		UserDTO userDTO = new UserDTO();
		BeanUtils.copyProperties(user, userDTO);
		return userDTO;
	}

		
}
