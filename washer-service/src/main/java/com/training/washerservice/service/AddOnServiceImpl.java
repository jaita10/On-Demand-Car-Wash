package com.training.washerservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.training.washerservice.model.AddOn;
import com.training.washerservice.model.Filter;
import com.training.washerservice.repository.AddOnRepository;
import com.training.washerservice.wrapper.AddOnList;
import com.training.washerservice.wrapper.StringList;

@Service
public class AddOnServiceImpl implements AddOnService{
	
	@Autowired
	public AddOnRepository addOnRepo;
	
	@Autowired
	MongoTemplate mongoTemplate;
	
	public void setRepository(AddOnRepository addOnRepository) {
		this.addOnRepo = addOnRepository;
	}
	
	public boolean doesExists(String addonId) {
		return addOnRepo.existsById(addonId);
	}

	public boolean insertAddOn(AddOn addon) {
		if(validateAddOn(addon)) {
			addOnRepo.save(addon);
			return true;
		}
		return false;
	}
	
	public boolean validateAddOn(AddOn addon) {
		if((addon.getAddonPrice()) <= 50) {
			return false;
		}
		return true;
	}
	
	public AddOnList getAllAddOns() {
		List<AddOn> addonList = addOnRepo.findAll();
		return new AddOnList(addonList);
	}
	
	public boolean updateAddOn(AddOn addon){
		if(addOnRepo.countByAddOnId(addon.getAddonId()) == 0) {
			return false;
		}
		if(!validateAddOn(addon)) {
			return false;
		}
		addOnRepo.save(addon);
		return true;
	}
	
	public boolean deleteAddOn(StringList stringList) {
		for(String id:stringList.getStringList()) {
			if(addOnRepo.countByAddOnId(id) == 0){
				return false;
			}
		}
		for(String id:stringList.getStringList()) {
			addOnRepo.deleteByAddOnId(id);
		}
		return true;
	}
	
	public AddOnList getFilteredAddOns(Filter filterPack){
		if(filterPack.getSortBy().equals("addonTitle")) {
			List<AddOn> filterList = addOnRepo.getFilteredAddOnsByTitle(filterPack.getMinPrice(), filterPack.getMaxPrice());
			return new AddOnList(filterList);
		}
		List<AddOn> filterList = addOnRepo.getFilteredAddOnsByPrice(filterPack.getMinPrice(), filterPack.getMaxPrice());
		return new AddOnList(filterList);
	}

}
