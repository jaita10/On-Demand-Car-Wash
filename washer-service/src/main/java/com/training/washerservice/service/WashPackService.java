package com.training.washerservice.service;

import com.training.washerservice.model.Filter;
import com.training.washerservice.model.WashPack;
import com.training.washerservice.wrapper.StringList;
import com.training.washerservice.wrapper.WashPackList;

public interface WashPackService {
	
	public boolean addWasher(WashPack washer) ;
	
	public WashPackList getAllWashpacks() ;
	
	public boolean updateWashPack(WashPack washer);
	
	public boolean deleteWashPack(StringList stringList);
	
	public WashPackList getFilteredWashPacks(Filter filterPack);

}
