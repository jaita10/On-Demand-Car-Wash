package com.training.userservice.wrapper;

import java.util.ArrayList;
import java.util.List;

public class StringList {
	
	private List<String> stringList = new ArrayList<>();
	
	public StringList() {}
	
	public StringList(List<String> stringList) {
		this.stringList = stringList;
	}

	public List<String> getStringList() {
		return stringList;
	}

	public void setStringList(List<String> stringList) {
		this.stringList = stringList;
	}

	public void add(String string) {
		stringList.add(string);
	}

}
