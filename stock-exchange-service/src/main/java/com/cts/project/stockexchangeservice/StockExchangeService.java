package com.cts.project.stockexchangeservice;

import java.util.List;


public interface StockExchangeService {

	public StockExchange save(StockExchange stockExchange);

	public void remove(int id);

	public StockExchange update(StockExchange stockExchange);

	public StockExchange getById(int id);

	public List<StockExchange> getAll();

}
