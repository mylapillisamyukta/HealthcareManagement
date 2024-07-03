package com.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.entity.User;

@Repository
@EnableJpaRepositories

public interface UserRepository extends JpaRepository<User ,Long> {
	
	 
	 public Optional<User>findByUserName(String userName);

}
