package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.entity.Report;

@Repository
@EnableJpaRepositories
public interface ReportRepository  extends JpaRepository<Report, Long>  {

}
