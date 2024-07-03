package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.entity.Doctor;

@Repository
@EnableJpaRepositories
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
  
}
