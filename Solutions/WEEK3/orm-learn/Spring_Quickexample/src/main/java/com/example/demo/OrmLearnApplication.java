package com.example.demo;

import java.util.List;

import com.example.demo.model.Country;
import com.example.demo.service.CountryService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        LOGGER.info("Inside main");

        countryService = context.getBean(CountryService.class);

        testGetAllCountries();
    }

    public static void testGetAllCountries() {
        System.out.println("Start");
        List<Country> countryList = countryService.getAllCountries();
        System.out.println("countries = " + countryList);
        System.out.println("End");
    }
}
