package com.training.adminservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.training.adminservice.model.Report;

@Repository
public interface ReportRepository extends MongoRepository<Report, String> {
}