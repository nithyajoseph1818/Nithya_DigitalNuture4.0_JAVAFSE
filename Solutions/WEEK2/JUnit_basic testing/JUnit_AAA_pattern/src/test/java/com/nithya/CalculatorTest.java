package com.nithya;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    // 🧪 Test Fixture Setup
    @Before
    public void setUp() {
        System.out.println("🔧 Setting up Calculator instance...");
        calc = new Calculator();
    }

    // 🧹 Teardown
    @After
    public void tearDown() {
        System.out.println("🧼 Cleaning up...");
        calc = null;
    }

    // Arrange - Act - Assert

    @Test
    public void testAddition_AAA() {
        // Arrange
        int a = 10, b = 5;

        // Act
        int result = calc.add(a, b);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSubtraction_AAA() {
        int result = calc.subtract(20, 7);
        assertEquals(13, result);
    }

    @Test
    public void testMultiplication_AAA() {
        int result = calc.multiply(4, 6);
        assertEquals(24, result);
    }

    @Test
    public void testDivision_AAA() {
        int result = calc.divide(20, 4);
        assertEquals(5, result);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero_Exception() {
        calc.divide(10, 0); // Should throw exception
    }
}
