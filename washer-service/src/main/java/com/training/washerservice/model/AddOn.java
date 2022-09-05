package com.training.washerservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "Details about the Add On")
@Document(collection="AddOn")
public class AddOn {
	
    @ApiModelProperty(notes = "The unique id of the add on")
    @Id
    String addonId;
    @ApiModelProperty(notes = "The title of the add on")
    String addonTitle;
    @ApiModelProperty(notes = "The description of the add on")
    String addonDescription;
    @ApiModelProperty(notes = "The price of the add on")
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
