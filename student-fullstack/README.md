# Student Full Stack Application

A basic Java Full Stack Student Details application demonstrating:

React Frontend -> Spring Boot REST API -> MySQL Database

## Technologies
- React + Vite
- Java + Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- MySQL
- Maven

## Project Structure

student-fullstack/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── pom.xml
│   └── src/main/
│       ├── java/com/example/student/
│       │   ├── StudentApplication.java
│       │   ├── controller/StudentController.java
│       │   ├── model/Student.java
│       │   └── repository/StudentRepository.java
│       └── resources/application.properties
├── database/
│   └── studentdb.sql
└── README.md

## 1. Database

Open MySQL and run database/studentdb.sql.

Then update backend/src/main/resources/application.properties:

spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

## 2. Backend

Open the backend folder in IntelliJ IDEA / Eclipse / VS Code.

Run StudentApplication.java.

Backend URL:
http://localhost:8080

API:
GET  http://localhost:8080/api/students
POST http://localhost:8080/api/students

## 3. Frontend

Open a terminal inside frontend:

npm install
npm run dev

Frontend URL:
http://localhost:5173

## Data Flow

React form
   ↓
fetch()
   ↓
Spring Boot REST Controller
   ↓
Spring Data JPA Repository
   ↓
MySQL
   ↓
JSON response
   ↓
React table
