package com.training.washerservice;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

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
public class WasherServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(WasherServiceApplication.class, args);
	}
	
	@Bean
	public Docket getDocket() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.training.washerservice"))
				.paths(PathSelectors.ant("/washers/**"))
				.build()
				.apiInfo(null);
		
	}
	
//	private ApiInfo apiDetails ( ) {
//	    return new ApiInfo (
//	            " Address book API " ,
//	            " Sample API for JavaBrains tutorial " ,
//	            " 1.0 " ,
//	            " Free to use " ,
//	            new springfox.documentation.service.Contact ( " Koushik Kothagal " , " http://javabrains.io " , " a@b.com " ) ,
//	            " API License " ,
//	            " http://javabrains.io " ,
//	            Collections.emptyList ( ) ) ;
//	    
//	}

}
