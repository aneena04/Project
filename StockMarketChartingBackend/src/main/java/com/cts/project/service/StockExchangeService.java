package com.cts.project.service;

import java.util.List;

import com.cts.project.dto.StockExchangeDTO;

public interface StockExchangeService {

	public StockExchangeDTO insert(StockExchangeDTO stockExchangeDTO);

	public void remove(int id);

	public StockExchangeDTO update(StockExchangeDTO stockExchangeDTO);

	public StockExchangeDTO getById(int id);

	public List<StockExchangeDTO> getAll();

}
