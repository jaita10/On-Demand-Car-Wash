package com.training.washerservice.wrapper;

import java.util.List;

import com.training.washerservice.model.AddOn;

public class AddOnList {
	
	public List<AddOn> addonList;

	public AddOnList() {
		
	}

	public AddOnList(List<AddOn> addonList) {
		super();
		this.addonList = addonList;
	}

	public List<AddOn> getAddonList() {
		return addonList;
	}

	public void setAddonList(List<AddOn> addonList) {
		this.addonList = addonList;
	}
	
	@Override
    public boolean equals(Object obj) {
        if(! (obj instanceof AddOnList) ) {
        	return false;
        }
        AddOnList givenObj = (AddOnList)obj;
        List<AddOn> allAddOns = givenObj.getAddonList();
        if( allAddOns.size() != addonList.size() ) {
        	return false;
        }
        for(int i=0;i<allAddOns.size();i++) {
            AddOn myAddOn = addonList.get(i) , objAddOn = allAddOns.get(i);
            if(myAddOn.getAddonId() != null) {
                if( ! objAddOn.getAddonId().equals( myAddOn.getAddonId() ) ) {
                	return false;                
                }
            }
            if( ! objAddOn.getAddonTitle().equals( myAddOn.getAddonTitle() ) ) {
            	return false;
            }
            if( ! objAddOn.getAddonDescription().equals( myAddOn.getAddonDescription() ) ) {
            	return false;
            }
            if( objAddOn.getAddonPrice() != myAddOn.getAddonPrice()) {
            	return false;
            }
        }
        return true;
    }

}
