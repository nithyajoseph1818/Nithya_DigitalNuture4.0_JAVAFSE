# Week 4: Spring Boot – REST & JWT Hands-On

This week focused on mastering Spring Boot with RESTful web services and implementing basic JWT (JSON Web Token) authentication. The exercises deepened my understanding of Spring annotations, dependency injection, REST principles, and secure authentication mechanisms.

---

## 📁 Folder Structure

week4/
├── spring_REST_handson/
│ ├── Springboot_REST_handson_1/ # Create a Spring Web project using Maven
│ ├── Springboot_REST_handson_2/ # Load Country from configuration
│ ├── spring_REST_handson3/ # Hello World REST Service
│ ├── Spring_REST_handson4/ # Country bean from XML config
│ ├── Spring_REST_handson5/ # Get Country by Code (REST)
├── springboot_jwt_auth/ # JWT Authentication Service (1 curl-based service)


---

## ✅ Hands-On Exercises Summary

### 1. Springboot_REST_handson_1
- **Goal:** Setup a simple Spring Boot project using Maven.
- **Learned:**
  - Spring Boot starter dependencies.
  - Application setup and directory structure.
  - Basic controller creation.

### 2. Springboot_REST_handson_2
- **Goal:** Load a `Country` bean from Spring configuration.
- **Learned:**
  - Bean declaration via `@Component` and XML.
  - `@Autowired` and DI concepts.

### 3. spring_REST_handson3
- **Goal:** Build a "Hello World" RESTful web service.
- **Learned:**
  - `@RestController` and `@GetMapping`.
  - How to test endpoints using Postman or browser.

### 4. Spring_REST_handson4
- **Goal:** Load a Country bean from Spring XML configuration.
- **Learned:**
  - How to integrate XML-based Spring configuration.
  - XML vs Annotation configuration styles.

### 5. Spring_REST_handson5
- **Goal:** REST endpoint to get Country details by code.
- **Learned:**
  - Path variables with `@PathVariable`.
  - RESTful naming conventions.
  - Bean management and simple lookup logic.

---

## 🔐 JWT Authentication (springboot_jwt_auth)

- **Goal:** Implement a basic authentication service that returns a JWT token using a curl call.
- **Learned:**
  - How JWT tokens are structured and generated.
  - How to set up basic auth (`-u user:pwd`) for authentication.
  - Secure token handling and response formatting in Spring Boot.
  - Use of `pom.xml` dependencies like `jjwt`.

---

## 💡 What I Learned Overall

- How to bootstrap Spring Boot applications using Maven.
- REST principles and controller setup (`@RestController`, `@RequestMapping`).
- How Spring handles beans, dependency injection, and configuration (both annotation-based and XML-based).
- Creating REST endpoints using `@GetMapping`, `@PathVariable`.
- Introduction to securing APIs with JWT – a real-world security concept.
- Testing endpoints with tools like Postman and curl.
- Practical experience debugging common Spring Boot startup issues (e.g., port conflict, bean loading errors).

---

## 🚀 Next Steps

- Implement CRUD operations using Spring Data JPA.
- Enhance the JWT authentication with role-based access control.
- Build full-stack integration with frontend clients.

