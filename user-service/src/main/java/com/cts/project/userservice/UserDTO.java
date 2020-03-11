package com.cts.project.userservice;

public class UserDTO {

	int id;
	String name;
	String email;
	long phone;
	String username;
	String password;
	String cpassword;
	boolean enabled;
	private String role;

	public UserDTO() {

	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	

	public UserDTO(int id, String name, String email, long phone, String username, String password, String cpassword,
			boolean enabled, String role) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.username = username;
		this.password = password;
		this.cpassword = cpassword;
		this.enabled = enabled;
		this.role = role;
	}

	public String getCpassword() {
		return cpassword;
	}

	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

}
