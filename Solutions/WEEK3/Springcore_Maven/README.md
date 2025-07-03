# 📚 Springcore_Maven

This repository contains three foundational exercises developed using **Spring Core with Maven**. The goal was to explore core features of the Spring Framework such as Inversion of Control (IoC), Dependency Injection (DI), and project configuration using Maven. All projects were coded using **VS Code**, with Java 1.8 and Spring version 5.3.33.

---

## 📁 Folder Structure

Springcore_Maven/
│
├── Basic_Spring/
│ ├── pom.xml
│ ├── src/
│ ├── applicationContext.xml
│ └── output_basic_spring.png
│
├── Dependency_Injection/
│ ├── pom.xml
│ ├── src/
│ ├── applicationContext.xml
│ └── output_dependency_injection.png
│
└── Spring_Maven_Config/
├── pom.xml
├── src/
├── applicationContext.xml
└── output_spring_maven_config.png

---

## 🧪 Exercise 1: Basic Spring Project

📁 **Folder**: `Basic_Spring`  
📌 **Objective**: Configure a simple Spring project using Spring Core and XML-based bean configuration.

### 🔍 What I Learned:
- How to define beans manually in `applicationContext.xml`.
- How to use `ApplicationContext` to bootstrap a Spring app.
- Setter-based dependency wiring via XML.

### 🧾 Output:
![Basic Spring Output](Basic_Spring/output_basic_spring.png)

> **Expected Console Output:**
BookService: Adding book...
Book saved to repository: The Great Gatsby


---

## 🔁 Exercise 2: Dependency Injection with Spring

📁 **Folder**: `Dependency_Injection`  
📌 **Objective**: Demonstrate dependency injection using Spring’s IoC container.

### 🔍 What I Learned:
- Setter-based dependency injection using `<property>` in XML.
- Loose coupling between `BookService` and `BookRepository`.
- Structure separation between service and repository layers.

### 🧾 Output:
![Dependency Injection Output](Dependency_Injection/output_dependency_injection.png)

> **Expected Console Output:**
BookService: Adding book - Wings of Fire
BookRepository: Saved book - Wings of Fire


---

## ⚙️ Exercise 3: Maven Project Configuration

📁 **Folder**: `Spring_Maven_Config`  
📌 **Objective**: Set up a Spring Maven project with all required dependencies and plugin configurations.

### 🔍 What I Learned:
- How to configure Spring Context, AOP, and WebMVC in `pom.xml`.
- How to use the Maven Compiler Plugin for Java 1.8.
- How to use `exec-maven-plugin` for running Java classes from VS Code.

### 🧾 Output:
![Maven Config Output](Spring_Maven_Config/output_spring_maven_config.png)

> **Expected Console Output:**
BookService: Processing book - Invisible Man
Saving book: Invisible Man

🎯 Summary

This mini-module helped me understand the **fundamentals of Spring Core** programming, dependency injection, and Maven project setup. All configurations are done in XML style for a deeper understanding of traditional Spring Framework setup before moving into Spring Boot.
