package com.cts.project.serviceimpl;

import java.util.List;

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
	StockExchangeRepo stockExchangeRepo;

	@Override
	public StockExchangeDTO insert(StockExchangeDTO stockexchangeDTO) {

		StockExchange stockExchangeEntity = new StockExchange();
		BeanUtils.copyProperties(stockexchangeDTO, stockExchangeEntity);
		stockExchangeRepo.save(stockExchangeEntity);

		return stockexchangeDTO;
	}

	@Override
	public void remove(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public StockExchangeDTO update(StockExchangeDTO stockExchangeDTO) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public StockExchangeDTO getById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<StockExchangeDTO> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
