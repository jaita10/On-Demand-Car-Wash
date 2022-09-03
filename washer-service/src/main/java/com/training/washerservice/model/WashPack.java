package com.training.washerservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="WashPack")
public class WashPack {

    @Id
    String washpackId;
    String washpackTitle;
    String washpackDescription;
    int washpackPrice;
    
	public WashPack() {
		
	}

	public WashPack(String washpackId, String washpackTitle, String washpackDescription, int washpackPrice) {
		super();
		this.washpackId = washpackId;
		this.washpackTitle = washpackTitle;
		this.washpackDescription = washpackDescription;
		this.washpackPrice = washpackPrice;
	}

	public String getWashpackId() {
		return washpackId;
	}

	public void setWashpackId(String washpackId) {
		this.washpackId = washpackId;
	}

	public String getWashpackTitle() {
		return washpackTitle;
	}

	public void setWashpackTitle(String washpackTitle) {
		this.washpackTitle = washpackTitle;
	}

	public String getWashpackDescription() {
		return washpackDescription;
	}

	public void setWashpackDescription(String washpackDescription) {
		this.washpackDescription = washpackDescription;
	}

	public int getWashpackPrice() {
		return washpackPrice;
	}

	public void setWashpackPrice(int washpackPrice) {
		this.washpackPrice = washpackPrice;
	}

	
    
	
	
    
}
