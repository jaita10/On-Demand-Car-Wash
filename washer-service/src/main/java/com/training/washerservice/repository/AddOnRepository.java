package com.training.washerservice.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.training.washerservice.model.AddOn;

@Repository
public interface AddOnRepository extends MongoRepository<AddOn, String> {
	
	@Query(value = "{addonId: ?0}")
	public AddOn findByAddOnId(String addonId);
	
	@Query(value = "{addonId: ?0}",count = true)
	public long countByAddOnId(String addonId);
	
	@Query(value = "{addonId: ?0}",delete = true)
	public void deleteByAddOnId(String addonId);
	
	@Query(value = "{addonPrice : { $gt : ?0 , $lt : ?1 } }" , sort = "{addonPrice : 1}")
	public List<AddOn> getFilteredAddOnsByPrice(int minPrice, int maxPrice);
	
	@Query(value = "{addonPrice : { $gt : ?0 , $lt : ?1 } }" , sort = "{addonTitle : 1}")
	public List<AddOn> getFilteredAddOnsByTitle(int minPrice, int maxPrice);

}
