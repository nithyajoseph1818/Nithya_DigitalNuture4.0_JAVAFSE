package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource("classpath:country.xml")
public class SpringRestHandson5Application {

    public static void main(String[] args) {
        SpringApplication.run(SpringRestHandson5Application.class, args);
    }
}
