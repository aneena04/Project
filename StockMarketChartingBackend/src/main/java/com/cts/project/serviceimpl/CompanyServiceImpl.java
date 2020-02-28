package com.cts.project.serviceimpl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cts.project.bean.Company;
import com.cts.project.dto.CompanyDTO;
import com.cts.project.repo.CompanyRepo;
import com.cts.project.service.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {
	@Autowired
	CompanyRepo cr;
	@Autowired
	CompanyService cs;

	@Override
	public CompanyDTO insert(CompanyDTO companyDTO) {
		Company ce = new Company();
		BeanUtils.copyProperties(companyDTO, ce);
		cr.save(ce);

		return companyDTO;
	}

}
