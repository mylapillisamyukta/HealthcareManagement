package com.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Report {
	 
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    @ManyToOne
	    @JoinColumn(name = "patient_id")
	    private Patient patient;
 
	    public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public Patient getPatient() {
			return patient;
		}
		public void setPatient(Patient patient) {
			this.patient = patient;
		}
		public String getReportDetails() {
			return reportDetails;
		}
		public void setReportDetails(String reportDetails) {
			this.reportDetails = reportDetails;
		}
		public LocalDateTime getReportDate() {
			return reportDate;
		}
		public void setReportDate(LocalDateTime reportDate) {
			this.reportDate = reportDate;
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
		private String reportDetails;
	    private LocalDateTime reportDate;
	    private LocalDateTime createdAt;
	    private LocalDateTime updatedAt;

}
