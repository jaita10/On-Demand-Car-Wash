package com.training.orderservice.model;

public class Location {
	
	long latitude;
	long longitude;
	
	public Location() {
		
	}
	
	public Location(long latitude, long longitude) {
		super();
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public long getLatitude() {
		return latitude;
	}

	public void setLatitude(long latitude) {
		this.latitude = latitude;
	}

	public long getLongitude() {
		return longitude;
	}

	public void setLongitude(long longitude) {
		this.longitude = longitude;
	}
	
	
}
