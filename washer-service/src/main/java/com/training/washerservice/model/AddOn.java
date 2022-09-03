package com.training.washerservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="AddOn")
public class AddOn {

    @Id
    String addonId;
    String addonTitle;
    String addonDescription;
    int addonPrice;
    
	public AddOn() {
		
	}

	public AddOn(String addonId, String addonTitle, String addonDescription, int addonPrice) {
		super();
		this.addonId = addonId;
		this.addonTitle = addonTitle;
		this.addonDescription = addonDescription;
		this.addonPrice = addonPrice;
	}

	public String getAddonId() {
		return addonId;
	}

	public void setAddonId(String addonId) {
		this.addonId = addonId;
	}

	public String getAddonTitle() {
		return addonTitle;
	}

	public void setAddonTitle(String addonTitle) {
		this.addonTitle = addonTitle;
	}

	public String getAddonDescription() {
		return addonDescription;
	}

	public void setAddonDescription(String addonDescription) {
		this.addonDescription = addonDescription;
	}

	public int getAddonPrice() {
		return addonPrice;
	}

	public void setAddonPrice(int addonPrice) {
		this.addonPrice = addonPrice;
	}

	
    
	
}
