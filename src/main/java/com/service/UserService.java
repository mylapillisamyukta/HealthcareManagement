package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.User;
import com.repository.UserRepository;

@Service
public class UserService {

	    @Autowired
	    private UserRepository userRepository;

	    public User saveUser(User user) {
	        return userRepository.save(user);
	    }

	    public List<User> findAll() {
	        return userRepository.findAll();
	    }

	    public Optional<User> findByUsername(String username) {
	        return userRepository.findByUserName(username);
	    }

	    public void deleteUser(Long  userId) {
	        userRepository.deleteById(userId);
	    }
	}



