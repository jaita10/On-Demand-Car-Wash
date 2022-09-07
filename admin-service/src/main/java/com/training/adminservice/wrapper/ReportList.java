package com.training.adminservice.wrapper;

import java.util.ArrayList;
import java.util.List;

import com.training.adminservice.model.Report;

public class ReportList {
	
	public List<Report> reportList = new ArrayList<>();

	public ReportList() {}

	public ReportList(List<Report> reportList) {
		super();
		this.reportList = reportList;
	}

	public List<Report> getReportList() {
		return reportList;
	}

	public void setReportList(List<Report> reportList) {
		this.reportList = reportList;
	}

	
	

}
