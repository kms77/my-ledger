package com.example.myledger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("com.example.myledger.repository")
@SpringBootApplication
public class MyledgerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyledgerApplication.class, args);
	}

}
