package com.cts.project.userservice;

import java.util.ArrayList;
import java.util.List;
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

		
}
