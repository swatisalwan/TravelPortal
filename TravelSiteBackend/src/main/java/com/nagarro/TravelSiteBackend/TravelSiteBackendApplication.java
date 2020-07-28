package com.nagarro.TravelSiteBackend;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.CrossOrigin;


@SpringBootApplication
@EnableWebSecurity
@CrossOrigin(origins="*")
public class TravelSiteBackendApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(TravelSiteBackendApplication.class, args);
	}

}
