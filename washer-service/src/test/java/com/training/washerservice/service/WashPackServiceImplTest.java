package com.training.washerservice.service;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import com.training.washerservice.model.AddOn;
import com.training.washerservice.model.WashPack;
import com.training.washerservice.repository.AddOnRepository;
import com.training.washerservice.repository.WashPackRepository;
import com.training.washerservice.wrapper.AddOnList;
import com.training.washerservice.wrapper.StringList;
import com.training.washerservice.wrapper.WashPackList;

class WashPackServiceImplTest {

	WashPackServiceImpl washPackService;
	
	AddOnServiceImpl addOnService;
	
	@BeforeEach
	void initEach() {
		WashPackRepository mockWashPackRepository = mock(WashPackRepository.class);
		washPackService = new WashPackServiceImpl();
		washPackService.setRepository(mockWashPackRepository);
		AddOnRepository mockAddOnRepository = mock(AddOnRepository.class);
		addOnService = new AddOnServiceImpl();
		addOnService.setRepository(mockAddOnRepository);
		
	}
	
	@Nested
	@DisplayName("Wash Pack Testing")
	class WashPackTest {
	
		@Test
		@DisplayName("Test for Insertion of Wash Pack")
		void testAddWasher() {
			WashPack washer = new WashPack();
			washer.setWashpackTitle("Silver Wash");
			washer.setWashpackDescription("Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dashboard polishing + Car perfume spray");
			washer.setWashpackPrice(400);
			when(washPackService.washrepo.save(washer)).thenReturn(washer);
			
			boolean validPriceIsSaved = washPackService.addWasher(washer);
			washer.setWashpackPrice(250);
			boolean invalidPriceIsSaved = washPackService.addWasher(washer);
			assertAll(
					() -> assertTrue(validPriceIsSaved, "Here the correct details are getting validated for the insertion of the wash pack"),
					() -> assertFalse(invalidPriceIsSaved, "Here the invalid price is getting checked for the insertion of the wash pack")
					);	
			
		}
		
		
		@Test
		@DisplayName("Testing for Listing of All Wash Packs")
		void testGetAllWashpacks() {
			List<WashPack> allWashPacks = new ArrayList<>();
			WashPack washPack = new WashPack();
			washPack.setWashpackTitle("Silver Wash");
			washPack.setWashpackDescription("Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dashboard polishing + Car perfume spray");
			washPack.setWashpackPrice(400);
			allWashPacks.add(washPack);
			washPack.setWashpackTitle("Power Wash");
			washPack.setWashpackDescription("Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dashboard polishing + Car perfume spray");
			washPack.setWashpackPrice(4000);
			allWashPacks.add(washPack); //dummy data
			
			when(washPackService.washrepo.findAll()).thenReturn(allWashPacks);
			WashPackList actualWashPackList = washPackService.getAllWashpacks(); //saving the new return value of the method that has been tested 
			
			WashPackList expectedWashPackList = new WashPackList(allWashPacks);
			assertEquals(actualWashPackList, expectedWashPackList, "This method is suppose to return the existing list of wash packs");
		}
		
		
		@Test
		@DisplayName("Test for Deletion of Wash Pack")
		void testDeletewashPack() {
			StringList stringList = new StringList();
			stringList.add("jshd76sdbhjsdf");
			stringList.add("jfvhijhd7wqhg");
			stringList.add("nst76cbhjc");
			when(washPackService.washrepo.countByWashPackId("jshd76sdbhjsdf")).thenReturn(1L);
			when(washPackService.washrepo.countByWashPackId("jfvhijhd7wqhg")).thenReturn(2L);
			when(washPackService.washrepo.countByWashPackId("nst76cbhjc")).thenReturn(3L);
			boolean validIds = washPackService.deleteWashPack(stringList);
			stringList.add("76vhgvhfyt76t");
			when(washPackService.washrepo.countByWashPackId("76vhgvhfyt76t")).thenReturn(0L);
			boolean invalidId = washPackService.deleteWashPack(stringList);
			assertAll(
					()-> assertTrue(validIds,"Here the correct ids are getting validated for the deletion of the wash pack"),
					()-> assertFalse(invalidId,"Here the invalid id is getting checked for the deletion of the wash pack")
			);
		}
		
		
		@Test
		@DisplayName("Test for Updation of Wash Pack")
		void testUpdateWashPack() {
			WashPack washPack = new WashPack("uhvg6757bvhgf" , "Silver Wash" , "Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dashboard polishing + Car perfume spray" , 400);
			when(washPackService.washrepo.countByWashPackId("uhvg6757bvhgf")).thenReturn(2L);
			boolean validDetails = washPackService.updateWashPack(washPack);
			washPack.setWashpackPrice(150);
			boolean invalidPriceIsSaved = washPackService.updateWashPack(washPack);
			washPack.setWashpackPrice(700);
			washPack.setWashpackId("unguyg87t6");
			boolean invalidId = washPackService.updateWashPack(washPack);
			assertAll(
					() -> assertTrue(validDetails , "Here the correct details are getting validated for the updation of the wash pack"),
					() -> assertFalse(invalidPriceIsSaved,"Here the invalid price is getting checked for the updation of the wash pack"),
					() -> assertFalse(invalidId,"Here the invalid id is getting checked even the price is validated for the updation of the wash pack")
					);	
			
		}
		
	}
	
	
	
	@Nested
	@DisplayName("AddOn Testing")
	class AddOnTest {
	
		@Test
		@DisplayName("Test for Insertion of AddOn")
		void testInsertAddOn() {
			AddOn addOn = new AddOn();
			addOn.setAddonTitle("AC Disinfectant");
			addOn.setAddonDescription("The aim of this service is to clean and sanitize the air conditioning compartment of the car.");
			addOn.setAddonPrice(100);
			when(addOnService.addOnRepo.save(addOn)).thenReturn(addOn);
			boolean validPriceIsSaved = addOnService.insertAddOn(addOn);
			addOn.setAddonPrice(40);
			boolean invalidPriceIsSaved = addOnService.insertAddOn(addOn);
			assertAll(
					() -> assertTrue(validPriceIsSaved, "Here the correct details are getting validated for the insertion of the add-on"),
					() -> assertFalse(invalidPriceIsSaved, "Here the invalid price is getting checked for the insertion of the add-on")
					);	
			
		}
		
		
		@Test
		@DisplayName("Testing for Listing of All AddOns")
		void testGetAllAddOns() {
			List<AddOn> allAddOns = new ArrayList<>();
			AddOn addOn = new AddOn();
			addOn.setAddonTitle("AC Disinfectant");
			addOn.setAddonDescription("The aim of this service is to clean and sanitize the air conditioning compartment of the car.");
			addOn.setAddonPrice(100);
			allAddOns.add(addOn);
			addOn.setAddonTitle("Wiper");
			addOn.setAddonDescription("The aim of this service is to clean and sanitize the air conditioning compartment of the car.");
			addOn.setAddonPrice(400);
			allAddOns.add(addOn); //dummy data
			
			when(addOnService.addOnRepo.findAll()).thenReturn(allAddOns);
			AddOnList actualAddOnList = addOnService.getAllAddOns(); //saving the new return value of the method that has been tested 
			
			AddOnList expectedAddOnList = new AddOnList(allAddOns);
			assertEquals(actualAddOnList, expectedAddOnList, "This method is suppose to return the existing list of add-ons");
		}
		
		
		@Test
		@DisplayName("Test for Deletion of AddOn")
		void testDeleteAddOn() {
			StringList stringList = new StringList();
			stringList.add("jshd76sdbhjsdf");
			stringList.add("jfvhijhd7wqhg");
			stringList.add("nst76cbhjc");
			when(addOnService.addOnRepo.countByAddOnId("jshd76sdbhjsdf")).thenReturn(1L);
			when(addOnService.addOnRepo.countByAddOnId("jfvhijhd7wqhg")).thenReturn(2L);
			when(addOnService.addOnRepo.countByAddOnId("nst76cbhjc")).thenReturn(3L);
			boolean validIds = addOnService.deleteAddOn(stringList);
			stringList.add("76vhgvhfyt76t");
			when(addOnService.addOnRepo.countByAddOnId("76vhgvhfyt76t")).thenReturn(0L);
			boolean invalidId = addOnService.deleteAddOn(stringList);
			assertAll(
					()-> assertTrue(validIds,"Here the correct ids are getting validated for the deletion of the add-on"),
					()-> assertFalse(invalidId,"Here the invalid id is getting checked for the deletion of the add-on")
			);
		}
	
	
		@Test
		@DisplayName("Test for Updation of AddOn")
		void testUpdateAddOn() {
			AddOn addOn = new AddOn("ghbjhgu876","AC Disinfectant","The aim of this service is to clean and sanitize the air conditioning compartment of the car.",100);
			when(addOnService.addOnRepo.countByAddOnId("ghbjhgu876")).thenReturn(2L);
			boolean validDetails = addOnService.updateAddOn(addOn);
			addOn.setAddonPrice(40);
			boolean invalidPriceIsSaved = addOnService.updateAddOn(addOn);
			addOn.setAddonPrice(200);
			addOn.setAddonId("bysbut7bhg87");
			boolean invalidId = addOnService.updateAddOn(addOn);
			assertAll(
					() -> assertTrue(validDetails , "Here the correct details are getting validated for the updation of the add-on"),
					() -> assertFalse(invalidPriceIsSaved,"Here the invalid price is getting checked for the updation of the add-on"),
					() -> assertFalse(invalidId,"Here the invalid id is getting checked even the price is validated for the updation of the add-on")
					);	
			
		}
	}

}
