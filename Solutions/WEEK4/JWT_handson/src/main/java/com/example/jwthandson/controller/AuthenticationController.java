package com.example.jwthandson.controller;

import com.example.jwthandson.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/auth")
    public ResponseEntity<?> authenticate(Authentication authentication) {
        String username = authentication.getName();
        String token = jwtUtil.generateToken(username);
        return ResponseEntity.ok().body("{\"jwt\":\"" + token + "\"}");
    }
}
