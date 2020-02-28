package com.cts.project.serviceimpl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.project.bean.StockExchange;
import com.cts.project.dto.StockExchangeDTO;
import com.cts.project.repo.StockExchangeRepo;
import com.cts.project.service.StockExchangeService;

@Service
public class StockExchangeServiceImpl implements StockExchangeService {

	@Autowired
	StockExchangeRepo ser;
	@Autowired
	StockExchangeService ses;

	@Override
	public StockExchangeDTO insert(StockExchangeDTO stockexchangeDTO) {
		
		StockExchange stockE = new StockExchange();
		BeanUtils.copyProperties(stockexchangeDTO, stockE);
		ser.save(stockE);

		return stockexchangeDTO;
	}

}
