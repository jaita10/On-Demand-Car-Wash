package com.training.washerservice.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
	
	static Logger logger = LoggerFactory.getLogger(WasherController.class);

	@GetMapping("/WashPack/pass")
	public WashPack pass(WashPack washer) {
		return washer;
	}

	@PostMapping("/WashPack/add")
	public ResponseEntity<String> addWasher(@RequestBody WashPack washer) {
		boolean saved = washservice.addWasher(washer);
		if (saved) {
//			washservice.addWasher(washer);
			return new ResponseEntity<String>("New WashPack saved successfully", HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("WashPack cannot be added", HttpStatus.OK);
	}

	@GetMapping("/WashPack/list")
	public WashPackList getAllWashpacks() {
		return washservice.getAllWashpacks();

	}

	@PutMapping("/WashPack/update")
	public ResponseEntity<String> updateWashPack(@RequestBody WashPack washer) {
		boolean updated = washservice.updateWashPack(washer);
		if (updated) {
//			washservice.updateWashPack(washer);
			return new ResponseEntity<String>("WashPack updated successfully", HttpStatus.OK);
		}
		return new ResponseEntity<String>("WashPack cannot be updated", HttpStatus.OK);
	}

	@DeleteMapping("/WashPack/delete")
	public ResponseEntity<String> deleteWashPack(@RequestBody StringList stringList) {
		boolean deleted = washservice.deleteWashPack(stringList);
		if (deleted) {
//			washservice.deleteWashPack(stringList);
			return new ResponseEntity<String>("WashPack deleted successfully", HttpStatus.OK);
		}
		return new ResponseEntity<String>("WashPack cannot be deleted", HttpStatus.OK);
	}

	@GetMapping("/WashPack/filter")
	public WashPackList getFilteredWashPacks(@RequestBody Filter filterPack) {
		return washservice.getFilteredWashPacks(filterPack);

	}

	@PostMapping("/WashPack/TitleById")
	public ResponseEntity<StringList> getTitleById(@RequestBody StringList idList) {
		StringList titleList = new StringList();
		for (String id: idList.getStringList()) {
			String title = washservice.getTitleById(id);
			titleList.add(title);
			logger.info(title);
		}
		
		return new ResponseEntity<StringList>(titleList, HttpStatus.OK);
	}
	
	

	@GetMapping("/AddOn/pass")
	public AddOn pass() {
		return new AddOn();
	}

	@PostMapping("/AddOn/add")
	public ResponseEntity<String> insertAddOn(@RequestBody AddOn addon) {
		boolean saved = addonservice.insertAddOn(addon);
		if (saved) {
//			addonservice.insertAddOn(addon);
			return new ResponseEntity<String>("New AddOn saved successfully", HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("AddOn cannot be added", HttpStatus.OK);
	}

	@GetMapping("/AddOn/list")
	public AddOnList getAllAddOns() {
		return addonservice.getAllAddOns();

	}

	@PutMapping("/AddOn/update")
	public ResponseEntity<String> updateAddOn(@RequestBody AddOn addon) {
		boolean updated = addonservice.updateAddOn(addon);
		if (updated) {
//			addonservice.updateAddOn(addon);
			return new ResponseEntity<String>("AddOn updated successfully", HttpStatus.OK);
		}
		return new ResponseEntity<String>("AddOn cannot be updated", HttpStatus.OK);
	}

	@DeleteMapping("/AddOn/delete")
	public ResponseEntity<String> deleteAddOn(@RequestBody StringList stringList) {
		boolean deleted = addonservice.deleteAddOn(stringList);
		if (deleted) {
//			addonservice.deleteAddOn(stringList);
			return new ResponseEntity<String>("AddOn deleted successfully", HttpStatus.OK);
		}
		return new ResponseEntity<String>("AddOn cannot be deleted", HttpStatus.OK);
	}

	@GetMapping("/AddOn/filter")
	public AddOnList getFilteredAddOns(@RequestBody Filter filterPack) {
		return addonservice.getFilteredAddOns(filterPack);

	}

}
