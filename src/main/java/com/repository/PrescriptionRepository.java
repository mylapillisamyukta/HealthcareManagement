package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.entity.Prescription;

@Repository
@EnableJpaRepositories

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {

}
