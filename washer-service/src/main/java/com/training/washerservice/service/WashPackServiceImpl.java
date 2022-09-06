package com.training.washerservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.training.washerservice.model.Filter;
import com.training.washerservice.model.WashPack;
import com.training.washerservice.repository.WashPackRepository;
import com.training.washerservice.wrapper.StringList;
import com.training.washerservice.wrapper.WashPackList;

@Service
public class WashPackServiceImpl implements WashPackService{

	@Autowired
	public WashPackRepository washrepo;
	
	@Autowired
	MongoTemplate mongoTemplate;
	
	public void setRepository(WashPackRepository washPackRepository) {
		this.washrepo = washPackRepository;
	}
	
	public boolean doesExists(String washPackId) {
		return washrepo.existsById(washPackId);
	}
	
	
	public boolean addWasher(WashPack washer) {
		if(validateWashPack(washer)) {
			washrepo.save(washer);
			return true;
		}
		return false;
	}
	
	public boolean validateWashPack(WashPack washer) {
		if((washer.getWashpackPrice()) <= 300) {
			return false;
		}
		return true;
	}
	
	public WashPackList getAllWashpacks() {
		List<WashPack> washpackList = washrepo.findAll();
		return new WashPackList(washpackList);
	}
	
	public boolean updateWashPack(WashPack washer){
		if(washrepo.countByWashPackId(washer.getWashpackId()) == 0) {	
			return false;
		}
		if(!validateWashPack(washer)) {
			return false;
		}
		WashPack washPack = washrepo.findByWashPackId(washer.getWashpackId());
		if(washer.getWashpackTitle() == null) {
			washer.setWashpackTitle(washPack.getWashpackTitle());
		}
		if(washer.getWashpackDescription() == null) {
			washer.setWashpackDescription(washPack.getWashpackDescription());
		}
		if(washer.getWashpackPrice() == 0) {
			washer.setWashpackPrice(washPack.getWashpackPrice());
		}
		washrepo.save(washer);
		return true;
	}
	
	public boolean deleteWashPack(StringList stringList) {
		for(String id:stringList.getStringList()) {
			if(washrepo.countByWashPackId(id) == 0){
				return false;
			}
		}
		for(String id:stringList.getStringList()) {
			washrepo.deleteByWashPackId(id);
		}
		return true;
	}
	
	public WashPackList getFilteredWashPacks(Filter filterPack){
		if(filterPack.getSortBy().equals("washpackTitle")) {
			List<WashPack> filterList = washrepo.getFilteredWashPacksByTitle(filterPack.getMinPrice(), filterPack.getMaxPrice());
			return new WashPackList(filterList);
		}
		List<WashPack> filterList = washrepo.getFilteredWashPacksByPrice(filterPack.getMinPrice(), filterPack.getMaxPrice());
		return new WashPackList(filterList);
	}
	
}
