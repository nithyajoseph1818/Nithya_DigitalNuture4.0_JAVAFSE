package com.nithya;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testEquality() {
        assertEquals("Sum failed", 5, 2 + 3);
        assertNotEquals("Not equal check failed", 5, 2 * 2);
    }

    @Test
    public void testBooleanLogic() {
        assertTrue("True condition failed", 10 > 1);
        assertFalse("False condition failed", 3 > 10);
    }

    @Test
    public void testNullChecks() {
        Object obj = null;
        Object obj2 = new Object();

        assertNull("Should be null", obj);
        assertNotNull("Should not be null", obj2);
    }
    @Test
public void testStringMatch() {
    assertEquals("JUnit is working!", DummyData.getMessage());
}

}
