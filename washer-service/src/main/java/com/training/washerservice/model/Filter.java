package com.training.washerservice.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "Details about the Filter")
public class Filter {
	
	@ApiModelProperty(notes = "The minimun price of the filter")
	private int minPrice;
	@ApiModelProperty(notes = "The maximum price of the filter")
	private int maxPrice;
	@ApiModelProperty(notes = "The sorting by of the filter")
	private String sortBy;
	
	public Filter() {
		
	}

	public Filter(int minPrice, int maxPrice, String sortBy) {
		super();
		this.minPrice = minPrice;
		this.maxPrice = maxPrice;
		this.sortBy = sortBy;
	}

	public int getMinPrice() {
		return minPrice;
	}

	public void setMinPrice(int minPrice) {
		this.minPrice = minPrice;
	}

	public int getMaxPrice() {
		return maxPrice;
	}

	public void setMaxPrice(int maxPrice) {
		this.maxPrice = maxPrice;
	}

	public String getSortBy() {
		return sortBy;
	}

	public void setSortBy(String sortBy) {
		this.sortBy = sortBy;
	}

	
	
	

}
