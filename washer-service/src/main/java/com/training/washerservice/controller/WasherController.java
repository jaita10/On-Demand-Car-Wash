package com.training.washerservice.controller;

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

import com.training.washerservice.model.AddOn;
import com.training.washerservice.model.Filter;
import com.training.washerservice.model.WashPack;
import com.training.washerservice.service.AddOnService;
import com.training.washerservice.service.WashPackService;
import com.training.washerservice.wrapper.AddOnList;
import com.training.washerservice.wrapper.StringList;
import com.training.washerservice.wrapper.WashPackList;

@RestController
@RequestMapping("/washers")
public class WasherController {
	
	@Autowired
	public WashPackService washservice;
	
	@Autowired
	public AddOnService addonservice;
	
	
	
	@GetMapping("/WashPack/pass")
	public WashPack pass(WashPack washer) {
		return washer;
	}
	
	@PostMapping("/WashPack/add")
	public ResponseEntity<String> addWasher(@RequestBody WashPack washer) {
		boolean saved = washservice.addWasher(washer);
		if(saved) {
//			washservice.addWasher(washer);
			return new ResponseEntity<String> ("New WashPack saved successfully", HttpStatus.CREATED);
		}
		return new ResponseEntity<String> ("WashPack cannot be added", HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/WashPack/list")
	public WashPackList getAllWashpacks() {
		return washservice.getAllWashpacks();
		
	}
	
	@PutMapping("/WashPack/update")
	public ResponseEntity<String> updateWashPack(@RequestBody WashPack washer) {
		boolean updated = washservice.updateWashPack(washer);
		if(updated) {
//			washservice.updateWashPack(washer);
			return new ResponseEntity<String> ("New WashPack updated successfully", HttpStatus.OK);
		}
		return new ResponseEntity<String> ("WashPack cannot be updated", HttpStatus.BAD_REQUEST);
	}
	
	@DeleteMapping("/WashPack/delete")  
	public ResponseEntity<String> deleteWashPack(@RequestBody StringList stringList) {
		boolean deleted = washservice.deleteWashPack(stringList);
		if(deleted) {
//			washservice.deleteWashPack(stringList);
			return new ResponseEntity<String> ("WashPack deleted successfully", HttpStatus.OK);
		}
		return new ResponseEntity<String> ("WashPack cannot be deleted", HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/WashPack/filter")
	public WashPackList getFilteredWashPacks(@RequestBody Filter filterPack) {
		return washservice.getFilteredWashPacks(filterPack);
		
	}
	
	
	
	
	@GetMapping("/AddOn/pass")
	public AddOn pass() {
		return new AddOn();
	}
	
	
	@PostMapping("/AddOn/add")
	public ResponseEntity<String> insertAddOn(@RequestBody AddOn addon) {
		boolean saved = addonservice.insertAddOn(addon);
		if(saved) {
//			addonservice.insertAddOn(addon);
			return new ResponseEntity<String> ("New AddOn saved successfully", HttpStatus.CREATED);
		}
		return new ResponseEntity<String> ("AddOn cannot be added", HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/AddOn/list")
	public AddOnList getAllAddOns() {
		return addonservice.getAllAddOns();
		
	}
	
	@PutMapping("/AddOn/update")
	public ResponseEntity<String> updateAddOn(@RequestBody AddOn addon) {
		boolean updated = addonservice.updateAddOn(addon);
		if(updated) {
//			addonservice.updateAddOn(addon);
			return new ResponseEntity<String> ("New AddOn updated successfully", HttpStatus.OK);
		}
		return new ResponseEntity<String> ("AddOn cannot be updated", HttpStatus.BAD_REQUEST);
	}
	
	@DeleteMapping("/AddOn/delete")
	public ResponseEntity<String> deleteAddOn(@RequestBody StringList stringList) {
		boolean deleted = addonservice.deleteAddOn(stringList);
		if(deleted) {
//			addonservice.deleteAddOn(stringList);
			return new ResponseEntity<String> ("AddOn deleted successfully", HttpStatus.OK);
		}
		return new ResponseEntity<String> ("AddOn cannot be deleted", HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/AddOn/filter")
	public AddOnList getFilteredAddOns(@RequestBody Filter filterPack) {
		return addonservice.getFilteredAddOns(filterPack);
		
	}

}
