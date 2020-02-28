package com.cts.project.serviceimpl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.cts.project.bean.User;
import com.cts.project.dto.UserDTO;
import com.cts.project.repo.UserRepo;
import com.cts.project.service.UserService;
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepo ur;

	@Autowired
	UserService us;
	
	@Autowired
	JavaMailSender jms;

	@Override
	public UserDTO insert(UserDTO userDTO) {
		User ue = new User();
		BeanUtils.copyProperties(userDTO, ue);
		ur.save(ue);
		try {
			SimpleMailMessage sm = new SimpleMailMessage();
			sm.setFrom("babymol.bobby@gmail.com");
			sm.setTo(userDTO.getEmail());
			sm.setSubject("Testing Mail");
			sm.setText("Hi" + userDTO.getName() + "Account created click on <a href='http://localhost:4200/activate-user?"
					+ userDTO.getEmail() + "'>Click</a>");
			jms.send(sm);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return userDTO;
	}
	
	@Override
	public UserDTO save(UserDTO userDTO) {
		
				return userDTO;
	}
	

}
