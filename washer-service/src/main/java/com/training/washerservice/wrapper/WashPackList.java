package com.training.washerservice.wrapper;

import java.util.List;

import com.training.washerservice.model.WashPack;

public class WashPackList {
	
	public List<WashPack> washpackList;
	
	public WashPackList() {
		
	}

	public WashPackList(List<WashPack> washpackList) {
		super();
		this.washpackList = washpackList;
	}

	public List<WashPack> getWashpackList() {
		return washpackList;
	}

	public void setWashpackList(List<WashPack> washpackList) {
		this.washpackList = washpackList;
	}
	
	@Override
    public boolean equals(Object obj) {
        if(! (obj instanceof WashPackList) ) {
        	return false;
        }
        WashPackList givenObj = (WashPackList)obj;
        List<WashPack> allWashPacks = givenObj.getWashpackList();
        if( allWashPacks.size() != washpackList.size() ) {
        	return false;
        }
        for(int i=0;i<allWashPacks.size();i++) {
            WashPack myPack = washpackList.get(i) , objPack = allWashPacks.get(i);
            if(myPack.getWashpackId() != null) {
                if( ! objPack.getWashpackId().equals( myPack.getWashpackId() ) ) {
                	return false;                
                }
            }
            if( ! objPack.getWashpackTitle().equals( myPack.getWashpackTitle() ) ) {
            	return false;
            }
            if( ! objPack.getWashpackDescription().equals( myPack.getWashpackDescription() ) ) {
            	return false;
            }
            if( objPack.getWashpackPrice() != myPack.getWashpackPrice()) {
            	return false;
            }
        }
        return true;
    }

}
