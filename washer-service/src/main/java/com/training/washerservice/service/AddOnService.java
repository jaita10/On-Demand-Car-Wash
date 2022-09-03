package com.training.washerservice.service;

import com.training.washerservice.model.AddOn;
import com.training.washerservice.model.Filter;
import com.training.washerservice.wrapper.AddOnList;
import com.training.washerservice.wrapper.StringList;

public interface AddOnService {
	

	public boolean insertAddOn(AddOn addon) ;
	
	public AddOnList getAllAddOns() ;
	
	public boolean updateAddOn(AddOn addon);
	
	public boolean deleteAddOn(StringList stringList);
	
	public AddOnList getFilteredAddOns(Filter filterPack);

}
