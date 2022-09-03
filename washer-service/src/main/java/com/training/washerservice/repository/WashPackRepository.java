package com.training.washerservice.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.training.washerservice.model.WashPack;

@Repository
public interface WashPackRepository extends MongoRepository<WashPack, String> {
	
	@Query(value = "{washpackId: ?0}")
	public WashPack findByWashPackId(String washpackId);
	
	@Query(value = "{washpackId: ?0}",count = true)
	public long countByWashPackId(String washpackId);
	
	@Query(value = "{washpackId: ?0}",delete = true)
	public void deleteByWashPackId(String washpackId);
	
	@Query(value = "{washpackPrice : { $gt : ?0 , $lt : ?1 } }" , sort = "{washpackPrice : 1}")
	public List<WashPack> getFilteredWashPacksByPrice(int minPrice, int maxPrice);
	
	@Query(value = "{washpackPrice : { $gt : ?0 , $lt : ?1 } }" , sort = "{washpackTitle : 1}")
	public List<WashPack> getFilteredWashPacksByTitle(int minPrice, int maxPrice);


}
