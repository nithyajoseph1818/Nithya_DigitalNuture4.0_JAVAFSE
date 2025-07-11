## ✅ `README.md` — Spring REST Hands-On Projects

```markdown
# 🌱 Spring Boot REST Hands-On Collection

This project repository contains a series of Spring Boot RESTful web service hands-on exercises, designed to build practical skills in Java backend development using the Spring Framework.

---

## 📁 Folder Structure

```

spring-learn/
├── Spring\_REST\_handson1/         → Hello World REST API
├── Spring\_REST\_handson2/         → Return Country Bean from XML
├── Spring\_REST\_handson3/         → Hello World using Spring Boot
├── Spring\_REST\_handson4/         → Load Country Bean from XML via Spring Core
├── Spring\_REST\_handson5/         → Get Country by Country Code (REST + XML)

````

---

## 📚 Hands-On Descriptions & Learnings

### ✅ 1. Spring_REST_handson1 - Hello World REST API (Spring Web)
- **Goal**: Build a basic REST controller using `@RestController` and `@RequestMapping`.
- **Learning**:
  - Basics of Spring Web MVC
  - Simple GET request handling
  - Controller setup and port configuration

---

### ✅ 2. Spring_REST_handson2 - Return Country Bean (Spring Core XML)
- **Goal**: Load a single `Country` bean from XML and return it via a controller.
- **Learning**:
  - Spring XML configuration (`beans.xml`)
  - Loading beans using `ApplicationContext`
  - Mapping XML-based beans into controllers

---

### ✅ 3. Spring_REST_handson3 - Hello World with Spring Boot
- **Goal**: Use Spring Boot to simplify setup and expose a REST endpoint.
- **Learning**:
  - Spring Boot project structure
  - `@SpringBootApplication` annotation
  - Running application using `spring-boot:run`

---

### ✅ 4. Spring_REST_handson4 - Load Country List via Spring XML
- **Goal**: Load multiple `Country` beans from XML and return them.
- **Learning**:
  - Use of a utility wrapper (`CountryList.java`) to hold lists
  - Configure and return a list of beans from XML
  - Integrating Spring XML with a Boot application using `@ImportResource`

---

### ✅ 5. Spring_REST_handson5 - Get Country by Country Code (REST + XML)
- **Goal**: Create a REST service that returns a country based on a case-insensitive country code.
- **Learning**:
  - `@GetMapping` with `@PathVariable`
  - Filtering using Java 8 Streams (`filter`, `equalsIgnoreCase`)
  - Exception handling with custom `CountryNotFoundException`
  - Integration of Spring XML (`country.xml`) with Spring Boot using `@ImportResource`

---

## 🧠 Skills Gained

- REST API development using Spring Boot
- Handling path variables and request mappings
- Loading and injecting beans from XML configuration
- Working with lists, models, and service layers
- Clean separation of controller, service, model, and utility layers
- Error handling and debugging build failures

---

## 🚀 How to Run

```bash
mvn clean install
mvn spring-boot:run
````

Each project runs on a specific port (e.g., 8081, 8082, 8083 — check `application.properties`).

Use tools like **Postman** or browser to test endpoints.

---

## ✍️ Author

Nithya J
July 2025
Java | Spring Boot | RESTful APIs

