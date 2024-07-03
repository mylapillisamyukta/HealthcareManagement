CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(100) NOT NULL,
    Role ENUM('patient', 'doctor', 'admin') NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Phonenumber VARCHAR(20),
    Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    Updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
select * from Users;

CREATE TABLE Patients (
    PatientID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Firstname VARCHAR(100) NOT NULL,
    Lastname VARCHAR(100) NOT NULL,
    Age INT,
    Gender ENUM('male', 'female', 'other'),
    ContactDetails VARCHAR(100),
    EmailID VARCHAR(100),
    BloodGroup VARCHAR(100),
    Address VARCHAR(100),
    Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    Updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
select * from Patients;

CREATE TABLE Doctors (
    DoctorID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Firstname VARCHAR(100) NOT NULL,
    Lastname VARCHAR(100) NOT NULL,
    Specialty VARCHAR(100),
    LicenseNumber VARCHAR(100) UNIQUE NOT NULL,
    ExperienceYears INT,
    Clinic_address VARCHAR(100),
    PhoneNumber VARCHAR(100),
    Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    Updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
select * from Doctors;

CREATE TABLE Admins (
    AdminID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Firstname VARCHAR(100) NOT NULL,
    Lastname VARCHAR(100) NOT NULL,
    ContactDetails VARCHAR(100),
    Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    Updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
select * from Admins;

CREATE TABLE Appointments (
    AppointmentID INT PRIMARY KEY AUTO_INCREMENT,
    PatientID INT,
    DoctorID INT,
    Reason VARCHAR(100),
    AppointmentDate DATETIME NOT NULL,
    AppointmentTime DATETIME NOT NULL,
    AppointmentStatus ENUM('booked', 'rescheduled', 'canceled') NOT NULL,
    Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    Updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);
select * from Appointments;


CREATE TABLE MedicalRecord  (
    RecordID INT PRIMARY KEY AUTO_INCREMENT,
    PatientID INT,
    DoctorID INT,
    Diagnosis TEXT,
    Treatment TEXT,
    RecordDate DATETIME,
    Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    Updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);
select * from MedicalRecord;

CREATE TABLE Prescriptions (
    PrescriptionID INT PRIMARY KEY AUTO_INCREMENT,
    PatientID INT,
    DoctorID INT,
    MedicationDetails VARCHAR(100) NOT NULL,
    PrescriptionDate DATETIME,
    RenewalDate DATETIME,
    Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);
select * from  Prescriptions;

CREATE TABLE Billing (
    InvoiceID INT PRIMARY KEY AUTO_INCREMENT,
    PatientID INT,
    AppointmentID INT,
    Amount DECIMAL(10, 2) NOT NULL,
    PaymentMethod ENUM('credit_card', 'debit_card', 'insurance'),
    PaymentStatus ENUM('paid', 'unpaid') NOT NULL,
    PaymentDate DATETIME,
    Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (AppointmentID) REFERENCES Appointments(AppointmentID)
);
select * from Billing;


CREATE TABLE Telemedicine (
    ConsultationID INT PRIMARY KEY AUTO_INCREMENT,
    PatientID INT,
    DoctorID INT,
    ConsultationDate DATETIME,
    ConsultationType ENUM('video', 'audio'),
    Notes TEXT,
    Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);
select * from Telemedicine;

CREATE TABLE Notifications (
    NotificationID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    NotificationType ENUM('appointment', 'test_result', 'prescription_renewal', 'general'),
    Message TEXT,
    Sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
select * from Notifications;

CREATE TABLE Reports (
    ReportID INT PRIMARY KEY AUTO_INCREMENT,
    PatientID INT,
    ReportType ENUM('patient_demographics', 'appointment_statistics', 'other') NOT NULL,
    ReportDate DATETIME,
    ReportDetails TEXT,
    Generated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID)
);
select * from Reports;


