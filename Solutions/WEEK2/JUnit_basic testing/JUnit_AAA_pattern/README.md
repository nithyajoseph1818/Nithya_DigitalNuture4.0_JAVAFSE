# JUnit AAA Pattern & Test Fixtures – Java Project

This project demonstrates the **AAA (Arrange-Act-Assert) testing pattern** along with the use of **test fixtures** and **lifecycle methods** (`@Before`, `@After`) in JUnit 4.

---

## 📁 Project Structure

JUnit_AAA_pattern/
├── pom.xml
└── src/
├── main/java/com/nithya/Calculator.java ← Business logic class
└── test/java/com/nithya/CalculatorTest.java ← JUnit test class


## 🧠 Key Concepts Demonstrated

| Feature                | Used In                                 |
|------------------------|------------------------------------------|
| ✅ AAA Pattern          | All test methods follow Arrange → Act → Assert |
| 🔧 Test Fixture         | `Calculator calc` initialized in `@Before`  |
| 🧪 Setup Method         | `@Before` creates a fresh Calculator object |
| 🧹 Teardown Method      | `@After` nullifies the object after each test |
| ❗ Exception Handling   | `@Test(expected = ...)` for divide-by-zero case |

---

## ⚙️ Technologies Used
- Java 17
- Maven (Project Build Tool)
- JUnit 4.13.2

---

## 🚀 How to Run the Project

### 1. Navigate to the Project Root
```bash
cd JUnit_AAA_pattern
🔧 Setting up Calculator instance...
🧼 Cleaning up...

EXPECTED OUTPUT

Tests run: 5, Failures: 0, Errors: 0
BUILD SUCCESS
