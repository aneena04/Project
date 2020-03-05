package com.cts.project.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


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
	UserRepo userRepo;

	@Autowired
	JavaMailSender jms;

	@Override
	public UserDTO save(UserDTO userDTO) {
		User userEntity = new User();
		BeanUtils.copyProperties(userDTO, userEntity);
		userRepo.save(userEntity);
		try {
			SimpleMailMessage sm = new SimpleMailMessage();
			sm.setFrom("babymol.bobby@gmail.com");
			sm.setTo(userDTO.getEmail());
			sm.setSubject("Testing Mail");
			sm.setText(
					"Hi" + userDTO.getName() + "Account created click on <a href='http://localhost:4200/activate-user?"
							+ userDTO.getEmail() + "'>Click</a>");
			jms.send(sm);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return userDTO;
	}

	@Override
	public void remove(int id) {
		userRepo.deleteById(id);
	}

	@Override
	public UserDTO update(UserDTO userDTO) {
		User userEntity = new User();
		BeanUtils.copyProperties(userDTO, userEntity);
		userRepo.save(userEntity);
		return userDTO;
	}

	@Override
	public UserDTO getById(int id) {
		Optional<User> user = userRepo.findById(id);
		User userEntity = user.orElse(new User());
		UserDTO userDTO = new UserDTO();
		BeanUtils.copyProperties(userEntity, userDTO);
		return userDTO;
	}

	@Override
	public List<UserDTO> getAll() {
		List<User> userEntities = userRepo.findAll();
		List<UserDTO> userDTOs = new ArrayList<UserDTO>();
		for (User userEntity : userEntities) {
			UserDTO userDTO = new UserDTO();
			BeanUtils.copyProperties(userEntity, userDTO);
			userDTOs.add(userDTO);
		}
		return userDTOs;
	}

	@Override
	public UserDTO activateUser(String email) {
		User userEntity=userRepo.findByEmail(email);
		UserDTO userDTO=new UserDTO();
		BeanUtils.copyProperties(userEntity, userDTO);
		return userDTO;		
	}

	
}
