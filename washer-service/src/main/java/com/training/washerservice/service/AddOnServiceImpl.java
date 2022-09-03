package com.training.washerservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.washerservice.model.AddOn;
import com.training.washerservice.model.Filter;
import com.training.washerservice.repository.AddOnRepository;
import com.training.washerservice.repository.WashPackRepository;
import com.training.washerservice.wrapper.AddOnList;
import com.training.washerservice.wrapper.StringList;

@Service
public class AddOnServiceImpl implements AddOnService{
	
	@Autowired
	public AddOnRepository addonRepo;
	
	public void setRepository(AddOnRepository addOnRepository) {
		this.addonRepo = addOnRepository;
	}

	public boolean insertAddOn(AddOn addon) {
		if(validateAddOn(addon)) {
			addonRepo.save(addon);
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
		List<AddOn> addonList = addonRepo.findAll();
		return new AddOnList(addonList);
	}
	
	public boolean updateAddOn(AddOn addon){
		if(addonRepo.countByAddOnId(addon.getAddonId()) == 0) {
			return false;
		}
		if(!validateAddOn(addon)) {
			return false;
		}
		addonRepo.save(addon);
		return true;
	}
	
	public boolean deleteAddOn(StringList stringList) {
		for(String id:stringList.getStringList()) {
			if(addonRepo.countByAddOnId(id) == 0){
				return false;
			}
		}
		for(String id:stringList.getStringList()) {
			addonRepo.deleteByAddOnId(id);
		}
		return true;
	}
	
	public AddOnList getFilteredAddOns(Filter filterPack){
		if(filterPack.getSortBy().equals("addonTitle")) {
			List<AddOn> filterList = addonRepo.getFilteredAddOnsByTitle(filterPack.getMinPrice(), filterPack.getMaxPrice());
			return new AddOnList(filterList);
		}
		List<AddOn> filterList = addonRepo.getFilteredAddOnsByPrice(filterPack.getMinPrice(), filterPack.getMaxPrice());
		return new AddOnList(filterList);
	}

}
