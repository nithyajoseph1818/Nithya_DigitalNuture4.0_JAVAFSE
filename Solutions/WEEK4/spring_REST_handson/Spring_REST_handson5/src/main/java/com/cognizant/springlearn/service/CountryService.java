package com.cognizant.springlearn.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.util.CountryList;

@Service
public class CountryService {

    @Autowired
    private CountryList countryList;

    public Country getCountry(String code) {
        List<Country> countries = countryList.getCountryList();

        return countries.stream()
            .filter(c -> c.getCode().equalsIgnoreCase(code))
            .findFirst()
            .orElseThrow(() -> new CountryNotFoundException("Country not found: " + code));
    }
}
