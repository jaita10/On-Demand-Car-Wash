package com.training.adminservice.service;

import com.training.adminservice.model.Report;
import com.training.adminservice.wrapper.ReportList;
import com.training.adminservice.wrapper.StringList;

public interface ReportService {
	
	
	public String insertReport(Report report);
	
	public ReportList getAllReports();
	
	public String updateReport(Report report);

	public boolean deleteReports(StringList stringList);
	
	
		
}
