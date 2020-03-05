package com.cts.project.service;

import java.util.List;

import com.cts.project.dto.CompanyDTO;

public interface CompanyService {
	public CompanyDTO insert(CompanyDTO companyDTO);
	public void remove(int id);
	public CompanyDTO update(CompanyDTO companyDTO);
	public CompanyDTO getById(int id);
	public List<CompanyDTO> getAll();


}
