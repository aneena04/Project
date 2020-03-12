package com.cts.project.userservice;

import java.util.List;

public interface UserService {

	public User save(User user);
	public void remove(int id);
	public User update(User user);
	public User getById(int id);
	public List<User> getAll();
	public User activateUser(String email);

}
