package com.training.orderservice.controller;

import java.time.LocalDateTime;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.training.orderservice.model.Location;
import com.training.orderservice.model.Order;
import com.training.orderservice.model.PayRequest;
import com.training.orderservice.service.OrderService;
import com.training.orderservice.wrapper.OrderList;
import com.training.orderservice.wrapper.StringList;

@RestController
@RequestMapping("/orders")
public class OrderController {

	@Autowired
	OrderService orderService;

	@GetMapping("/pass")
	public Order pass(Order order) {
		order.setBookingTime(LocalDateTime.now());
		return order;
	}

	@PostMapping("/add")
	public ResponseEntity<String> insertOrder(@RequestBody Order order) {
		order.setBookingTime(LocalDateTime.now());
		String saved = orderService.insertOrder(order);
		if (saved.equals("Order saved successfully")) {
			return new ResponseEntity<String>(saved, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>(saved, HttpStatus.OK);
	}

	@GetMapping("/list")
	public OrderList getOrdersList() {
		return orderService.getAllOrders();
	}

	@PutMapping("/update")
	public ResponseEntity<String> updateOrder(@RequestBody Order order) {
		String updated = orderService.updateOrder(order);
		if (updated == "Order updated successfully") {
			return new ResponseEntity<String>(updated, HttpStatus.OK);
		}
		return new ResponseEntity<String>(updated, HttpStatus.OK);
	}

	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteOrder(@RequestBody StringList stringList) {
		boolean deleted = orderService.deleteOrders(stringList);
		if (deleted) {
			return new ResponseEntity<String>("Orders deleted successfully", HttpStatus.OK);
		}
		return new ResponseEntity<String>("Order with one of these Ids does not exist", HttpStatus.OK);
	}

	@PostMapping("/razorpay")
	public ResponseEntity<String> getRazorPayOrder(@RequestBody PayRequest payRequest) {
		try {
			RazorpayClient razorpay = new RazorpayClient("rzp_test_Nsoz50MkS6JTYr", "kJbMgdy7WOdAnEqvU1bL4TyC");

			JSONObject orderRequest = new JSONObject();
			orderRequest.put("amount", payRequest.getAmount()); // amount in the smallest currency unit
			orderRequest.put("currency", payRequest.getCurrency());
//		  orderRequest.put("receipt", "order_rcptid_11");

			com.razorpay.Order order = razorpay.orders.create(orderRequest);
			return new ResponseEntity<String>(order.toString(), HttpStatus.OK);
		} catch (RazorpayException e) {
			// Handle Exception
			e.printStackTrace();
		}
		return new ResponseEntity<String>("Exception thrown", HttpStatus.OK);
	}

	@PostMapping("/dummy")
	public ResponseEntity<String> addDummyData() {
		Order order = new Order("marutisuzukialto", "silverwash", new StringList(), 1000, new Location(45, 120),
				LocalDateTime.now());
		orderService.insertOrder(order);
//		order = new Order("chevroletstinger","goldwash",new StringList(),3000,new Location(45,120),LocalDateTime.now());
//		orderService.insertOrder(order);
//		order = new Order("mahindraxuv","platinumwash",new StringList(),2000,new Location(45,120),LocalDateTime.now());
//		orderService.insertOrder(order);
//		order = new Order("mercedesbenzamg","silverwash",new StringList(),1000,new Location(45,120),LocalDateTime.now());
//		orderService.insertOrder(order);
//		order = new Order("marutisuzukialto","superwash",new StringList(),2000,new Location(45,120),LocalDateTime.now());
//		orderService.insertOrder(order);
//		order = new Order("mahindraxuv","goldwash",new StringList(),4000,new Location(45,120),LocalDateTime.now());
//		orderService.insertOrder(order);
//		order = new Order("chevroletstinger","platinumwash",new StringList(),1000,new Location(45,120),LocalDateTime.now());
//		orderService.insertOrder(order);
		return new ResponseEntity<String>("The Dummy Data has been saved in in the database", HttpStatus.CREATED);
	}

}
