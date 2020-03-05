package com.cts.project.stockexchangeservice;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="*")
@RestController

public class StockExchangeRestController {
	@Autowired
	StockExchangeRepo stockExchangeRepo;

	@GetMapping("/exchange")
	public List<StockExchange> findAll() {
		return stockExchangeRepo.findAll();
	}

	@GetMapping("/exchange/{id}")
	public StockExchange findOne(@PathVariable int id) {
		Optional<StockExchange> stockExchange = stockExchangeRepo.findById(id);
		StockExchange exchange = stockExchange.get();
		return exchange;
	}

	@PostMapping("/exchange")
	public StockExchange save(@RequestBody StockExchange stockExchange) {
		StockExchange exchange = stockExchangeRepo.save(stockExchange);
		return exchange;
	}

	@DeleteMapping("/exchange/{id}")
	public void delete(@PathVariable int id) {
		stockExchangeRepo.deleteById(id);
	}

	@PutMapping("/exchange")
	public StockExchange update(@RequestBody StockExchange stockExchange) {
		StockExchange exchange = stockExchangeRepo.save(stockExchange);
		return exchange;
	}

}
