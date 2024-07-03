package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.entity.Notification;

@Repository
@EnableJpaRepositories
public interface NotificationRepository extends JpaRepository<Notification, Long> {

}
