package com.nithya;

public class TextTool {
    // Returns true if the word starts and ends with the same letter (non-obvious test case)
    public boolean hasMatchingEnds(String word) {
        if (word == null || word.length() < 2) return false;
        return Character.toLowerCase(word.charAt(0)) == Character.toLowerCase(word.charAt(word.length() - 1));
    }
}
