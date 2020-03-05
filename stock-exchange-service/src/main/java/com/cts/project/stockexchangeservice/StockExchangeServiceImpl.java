
package com.cts.project.stockexchangeservice;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StockExchangeServiceImpl implements StockExchangeService{

	@Autowired
	StockExchangeRepo stockExchangeRepo;
	
	
	@Override
	public List<StockExchange> getAll()
	{
		return stockExchangeRepo.findAll();
	}
	
	@Override
	public StockExchange save( StockExchange stockExchange)
	{
		StockExchange saveExchange=stockExchangeRepo.save(stockExchange);
		return saveExchange;
	}
	
	@Override
	public StockExchange getById( int id) 
	{
		Optional<StockExchange> exchangeList=stockExchangeRepo.findById(id);
		StockExchange stockExchange=exchangeList.get();
		return stockExchange;
	}
	
	@Override
	public void remove(int id)
	{
		stockExchangeRepo.deleteById(id);
	}

	
	@Override
	public StockExchange update(StockExchange stockExchange)
	{
		StockExchange updateExchange=stockExchangeRepo.save(stockExchange);
		return updateExchange;
	}

	

}
