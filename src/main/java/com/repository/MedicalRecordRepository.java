package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.entity.MedicalRecord;

@Repository
@EnableJpaRepositories
public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long> {

}
