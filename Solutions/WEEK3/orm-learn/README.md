# Week 3 - Spring Data JPA & Hibernate Hands-on

This week focuses on understanding the basics of **Java Persistence API (JPA)**, **Hibernate ORM**, and **Spring Data JPA** through hands-on practice with MySQL and a Spring Boot project.

---

## 🔧 Project Structure

Root folder: `orm-learn`

### 📁 Folder Organization:

```
orm-learn/
├── quickexample/                   # Hands-on 1: Spring Data JPA Quick Example
│   ├── src/main/java/...           # Contains Country entity, repository, and service
│   ├── src/main/resources/         # application.properties
│   ├── pom.xml                     # Maven configuration
│   └── OrmLearnApplication.java    # Main Spring Boot app with test logic
├── exercise2_JPA_Hibernate.md     # Hands-on 2: Theory - JPA vs Hibernate vs Spring Data JPA
└── README.md (this file)
```

---

## ✅ Hands-on 1: Spring Data JPA - Quick Example

### Description:

A starter Spring Boot project to demonstrate how to:

* Set up Spring Data JPA with MySQL
* Map a `Country` entity
* Retrieve data using `CountryRepository`
* Use service layer and log the output from the main method

### Tech Stack:

* Java 17
* Spring Boot 3.2.5
* Spring Data JPA
* Hibernate (as JPA implementation)
* MySQL 8
* Maven 3.6.2
* VS Code / Eclipse

### Key Classes:

* `Country.java`: JPA entity
* `CountryRepository.java`: JPA repository
* `CountryService.java`: Business logic layer
* `OrmLearnApplication.java`: Bootstraps and logs results

### Sample Output:

```
06-07-25 13:34:11.111 main      INFO  OrmLearnApplication        main  Inside main
06-07-25 13:34:11.222 main      DEBUG CountryService             getAllCountries  Start
06-07-25 13:34:11.333 main      DEBUG CountryService             getAllCountries  countries=[Country [code=IN, name=India], Country [code=US, name=United States]]
06-07-25 13:34:11.444 main      DEBUG CountryService             getAllCountries  End
```

---

## 🧠 Exercise 2: Difference between JPA, Hibernate and Spring Data JPA

### Java Persistence API (JPA)

* JSR 338 Specification for persisting, reading, and managing data
* Provides only **interfaces**, no implementation

### Hibernate

* A popular **ORM tool** that implements JPA
* Manages Java object-relational mapping and lifecycle

### Spring Data JPA

* High-level abstraction over JPA
* Reduces boilerplate code (no need to write custom DAO code)
* Integrates tightly with Spring

### Comparison Code:

**Hibernate Example:**

```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();
employeeID = (Integer) session.save(employee);
tx.commit();
session.close();
```

**Spring Data JPA Example:**

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

---

## 🗄 SQL Setup

Create the `ormlearn` schema and the country table:

```sql
CREATE SCHEMA ormlearn;

CREATE TABLE country (
    co_code VARCHAR(2) PRIMARY KEY,
    co_name VARCHAR(50)
);

INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States');
```

For Hands-on 5 and beyond, populate with the full country list provided in your exercise prompt.

---

