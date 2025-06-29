package com.nithya;

import org.junit.Test;
import static org.junit.Assert.*;

public class TextToolTest {

    @Test
    public void testHasMatchingEnds_true() {
        TextTool tool = new TextTool();
        assertTrue(tool.hasMatchingEnds("Level")); // L == l
    }

    @Test
    public void testHasMatchingEnds_false() {
        TextTool tool = new TextTool();
        assertFalse(tool.hasMatchingEnds("Echo"));
    }

    @Test
    public void testHasMatchingEnds_nullOrShort() {
        TextTool tool = new TextTool();
        assertFalse(tool.hasMatchingEnds(null));
        assertFalse(tool.hasMatchingEnds("A"));
    }
}
