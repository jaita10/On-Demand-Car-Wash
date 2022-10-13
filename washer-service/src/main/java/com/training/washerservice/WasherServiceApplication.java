package com.training.washerservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.client.RestTemplate;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@SpringBootApplication
@EnableEurekaClient
@EnableMongoRepositories
public class WasherServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(WasherServiceApplication.class, args);
	}

	@Bean
	public OpenAPI springShopOpenAPI() {
		return new OpenAPI().info(new Info().title("Washer Service API")
				.description("Service for communication with the Washer Database").version("v0.0.1"));
	}

//	@Bean
//	public Docket getDocket() {
//		return new Docket(DocumentationType.SWAGGER_2)
//				.select()
//				.apis(RequestHandlerSelectors.basePackage("com.training.washerservice"))
//				.paths(PathSelectors.ant("/washers/**"))
//				.build()
//				.apiInfo(null);
//		
//	}

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
	
	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
		
	}

}
