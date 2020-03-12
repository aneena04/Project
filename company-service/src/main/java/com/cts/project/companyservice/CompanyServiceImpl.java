package com.cts.project.companyservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyServiceImpl implements CompanyService {
	@Autowired
	CompanyRepo companyRepo;

	@Override
	public Company insert(Company company) {

		companyRepo.save(company);
		return company;
	}

	@Override
	public void remove(int id) {
		companyRepo.deleteById(id);
	}

	@Override
	public Company update(Company company) {

		return companyRepo.save(company);
		
	}

	@Override
	public Company getById(int id) {
		Optional<Company> company = companyRepo.findById(id);
	return company.orElse(new Company());
		
	}

	@Override
	public List<Company> getAll() {
	 return companyRepo.findAll();
		
	}

}
