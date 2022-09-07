package com.training.orderservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@SpringBootApplication
@EnableEurekaClient
@EnableMongoRepositories
public class OrderServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderServiceApplication.class, args);
	}
	
	@Bean
	public OpenAPI springShopOpenAPI() {
		return new OpenAPI().info(new Info().title("Order Service API")
				.description("Service for communication with the Order Database").version("v0.0.1"));
	}
	
//	@Bean
//	public Docket getDocket() {
//		return new Docket(DocumentationType.SWAGGER_2)
//				.select()
//				.apis(RequestHandlerSelectors.basePackage("com.training.washerservice"))
//				.paths(PathSelectors.ant("/washers/**"))
//				.build()
//				.apiInfo(null);
////				.apiInfo(apiDetails());
//		
//	}
//	
//	private ApiInfo apiDetails ( ) {
//	    return new ApiInfo (
//	            " CAR WASH " ,
//	            " Order Service " ,
//	            " 1.0 " ,
//	            " Free to use " ,
//	            new springfox.documentation.service.Contact ( " Jaita Kapuria " , "" , " jaitakapuria10@gmail.com" ) ,
//	            " API License " ,
//	            " " , //for the website which is mandatory here
//	            Collections.emptyList ( ) ) ;
//
//	}

}
