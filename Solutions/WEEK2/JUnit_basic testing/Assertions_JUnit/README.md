# JUnit Setup & Assertions – Java Testing Project

This project demonstrates how to **set up JUnit in a Maven-based Java project** and how to use **various assertion methods** in JUnit to validate test results.

---

## ⚙️ Technologies Used

- Java 17
- Maven
- JUnit 4.13.2

---

## 📁 Project Structure

JUnit_assertions_exercise/
├── pom.xml
├── README.md
└── src/
├── main/java/com/nithya/DummyData.java ← (optional logic class)
└── test/java/com/nithya/AssertionsTest.java ← JUnit test cases

---

## 🧠 What This Project Covers

### ✅ Part 1: JUnit Setup with Maven

- Project is initialized using Maven.
- `pom.xml` includes JUnit dependency.

```xml
<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>4.13.2</version>
  <scope>test</scope>
</dependency>

expected output
-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running com.nithya.AssertionsTest
Tests run: 4, Failures: 0, Errors: 0
BUILD SUCCESS

