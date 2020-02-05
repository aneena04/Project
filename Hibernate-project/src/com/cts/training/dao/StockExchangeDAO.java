package com.cts.training.dao;

import java.util.List;

import com.cts.training.model.StockExchange;


public interface StockExchangeDAO {
	public boolean saveStockExchange(StockExchange se);

	public boolean updateStockExchange(StockExchange se);

	public boolean daleteStockExchange(StockExchange se);

	public StockExchange getStockExchangeById(int id);

	public List<StockExchange> getAllStockExchanges();


}

