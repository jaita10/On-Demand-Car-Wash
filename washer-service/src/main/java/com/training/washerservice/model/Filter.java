package com.training.washerservice.model;

public class Filter {
	
	private int minPrice;
	private int maxPrice;
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
