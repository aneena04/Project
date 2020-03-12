package com.cts.project.stockpriceservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StockPriceServiceImpl implements StockPriceService {

	@Autowired
	StockPriceRepo stockPriceRepo;
	
	@Override
	public StockPrice save(StockPrice stockPrice) {
		StockPrice savePrice=stockPriceRepo.save(stockPrice);
		return savePrice;
	}

	@Override
	public void remove(int id) {
		stockPriceRepo.deleteById(id);
		
	}

	@Override
	public StockPrice update(StockPrice stockPrice) {
		StockPrice updatePrice=stockPriceRepo.save(stockPrice);
		return updatePrice;
	}

	@Override
	public StockPrice getById(int id) {
		Optional<StockPrice> exchangeList=stockPriceRepo.findById(id);
		StockPrice stockExchange=exchangeList.get();
		return stockExchange;
	}

	@Override
	public List<StockPrice> getAll() {
		return stockPriceRepo.findAll();

	}

}
