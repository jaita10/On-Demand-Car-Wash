package com.training.adminservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.training.adminservice.model.Report;
import com.training.adminservice.repository.ReportRepository;
import com.training.adminservice.wrapper.ReportList;
import com.training.adminservice.wrapper.StringList;

@Service
public class ReportServiceImpl implements ReportService {
	
	@Autowired
	ReportRepository reportRepo;

	@Autowired
	MongoTemplate mongoTemplate;
	
	public void setRepository(ReportRepository reportRepository) {
		this.reportRepo = reportRepository;
	}
	
	public boolean doesExists(String reportId) {
		return reportRepo.existsById(reportId);
	}
	
	
	
	
	
	
	public void validateReport(Report report) throws Exception {
		try {
				validateExistenceOfIds(report);  //needs to understand this part
		} catch (Exception e) {
			throw e;
		}
	}
	
	public void validateExistenceOfIds(Report report) throws Exception {
		
	}

	public String insertReport(Report report) {
		if(report.getReportId()!= null) {
			if (reportRepo.existsById(report.getReportId())) {
				return "Report Already Exists";
			}			
		}
		try {
			validateReport(report);
			reportRepo.save(report);
			return "Report saved successfully";
		}catch(Exception e) {
			return e.getMessage();
		}
	}
	
	public ReportList getAllReports() {
		List<Report> reportList = reportRepo.findAll();
		return new ReportList(reportList);
	}
	
	public String updateReport(Report report) {
		if (!reportRepo.existsById(report.getReportId())) {
			return "Report with this Id does not Exist";
		}
		try {
			validateReport(report);
			reportRepo.save(report);
			return "Report updated successfully";
		}catch(Exception e) {
			return e.getMessage();
		}
	}

	public boolean deleteReports(StringList stringList) {
		for (String reportId : stringList.getStringList()) {
			if (!reportRepo.existsById(reportId))
				return false;
		}
		reportRepo.deleteAllById(stringList.getStringList());
		return true;
	}
	
	
	
	

}
