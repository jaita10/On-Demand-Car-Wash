package com.training.orderservice.model;

import java.util.Date;

public class TryDate {
	
	public static void main(String args[]) {
		Date date = new Date(System.currentTimeMillis());
		System.out.println(date);
		
		
		System.out.println(date.after(date));
		
	}

}
