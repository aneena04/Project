package com.cts.project.stockpriceservice.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import com.cts.project.stockpriceservice.CompanyDTO;


@FeignClient("company-service")
public interface CompanyServiceProxy {
	
	@GetMapping("/company")
	public List<CompanyDTO> findAll() ;

	
	
}
