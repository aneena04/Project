package com.cts.project.initialpublicofferingservice;


	import java.util.List;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;


	@Service
	public class InitialPublicOfferingServiceImpl implements InitialPublicOfferingService{
		
		@Autowired
		InitialPublicOfferingRepo ipoRepo;
		
		@Override
		public List<InitialPublicOffering> getAllIpo()
		{
			return ipoRepo.findAll();
		}
		@Override
		public InitialPublicOffering getById(int id)
		{
			Optional<InitialPublicOffering> ipoList=ipoRepo.findById(id);
			InitialPublicOffering ipo=ipoList.get();
			return ipo;
		}
		@Override
		public InitialPublicOffering save(InitialPublicOffering ipo)
		{
			InitialPublicOffering saveIpo=ipoRepo.save(ipo);
			return saveIpo;
		}
		@Override
		public void delete(int id)
		{
			ipoRepo.deleteById(id);
		}
		@Override
		public InitialPublicOffering update(InitialPublicOffering ipo)
		{
			InitialPublicOffering updateIpo=ipoRepo.save(ipo);
			return updateIpo;
		}


	}



