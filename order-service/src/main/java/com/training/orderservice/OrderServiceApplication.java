package com.training.orderservice;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import io.swagger.annotations.Api;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableEurekaClient
@EnableMongoRepositories
@EnableSwagger2
public class OrderServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderServiceApplication.class, args);
	}
	
	@Bean
	public Docket getDocket() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.training.washerservice"))
				.paths(PathSelectors.ant("/washers/**"))
				.build()
				.apiInfo(apiDetails());
		
	}
	
	private ApiInfo apiDetails ( ) {
	    return new ApiInfo (
	            " CAR WASH " ,
	            " Order Service " ,
	            " 1.0 " ,
	            " Free to use " ,
	            new springfox.documentation.service.Contact ( " Jaita Kapuria " , "" , " jaitakapuria10@gmail.com" ) ,
	            " API License " ,
	            " " , //for the website which is mandatory here
	            Collections.emptyList ( ) ) ;

	}

}
