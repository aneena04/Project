package com.cts.project.initialpublicofferingservice;

import java.util.List;

public interface InitialPublicOfferingService {
	
		public List<InitialPublicOffering> getAllIpo();
		public InitialPublicOffering getById( int id);
		public InitialPublicOffering save(InitialPublicOffering ipo);
		public void delete(int id);
		public InitialPublicOffering update(InitialPublicOffering ipo);


		
	}	


