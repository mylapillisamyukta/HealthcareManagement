package com.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "userId", unique = true, nullable = false, length = 100)
	private Long userId;

	@Column(name = "userName", nullable = false, length = 50)
	private String userName;

	@Column(name = "password", nullable = false, length = 50)
	private String password;

	@Column(name = "email", nullable = false, length = 50)
	private String email;

	@Column(unique = true, length = 20)
	private String phoneNumber;
	
	@Column(name ="address",length=255)
	private String address;
	
	@Column(name ="role",length=20)
	private String role;
	
	@Column(name ="createdAt")
	private LocalDateTime createdAt;
	
	@Column(name ="updatedAt")
	private LocalDateTime updatedAt;		

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
}
