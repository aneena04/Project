package com.cts.project.service;

import com.cts.project.dto.UserDTO;

public interface UserService {

	public UserDTO insert(UserDTO userDTO);
	public UserDTO save(UserDTO userDTO);
}
