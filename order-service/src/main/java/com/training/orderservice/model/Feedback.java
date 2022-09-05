package com.training.orderservice.model;

public class Feedback {
	
	String review;
	int rating;
	
	public Feedback() {
		
	}

	public Feedback(String review, int rating) {
		super();
		this.review = review;
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}
	
	public boolean validateRating() {    //validate the rating between 1 to 5 range 
		if(this.rating <=5 && this.rating >=1) {
			return true;
		}
		return false;
		
	}
	

}
