package com.cts.project.controller;

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

import com.cts.project.bean.StockExchange;
import com.cts.project.repo.StockExchangeRepo;

@CrossOrigin(origins="*")
@RestController

public class StockExchangeController {
	@Autowired
	StockExchangeRepo ser;

	@GetMapping("/exchange")
	public List<StockExchange> findAll() {
		return ser.findAll();
	}

	@GetMapping("/exchange/{id}")
	public StockExchange findOne(@PathVariable int id) {
		Optional<StockExchange> ex = ser.findById(id);
		StockExchange exchange = ex.get();
		return exchange;
	}

	@PostMapping("/exchange")
	public StockExchange save(@RequestBody StockExchange ex) {
		StockExchange exchange = ser.save(ex);
		return exchange;
	}

	@DeleteMapping("/exchange/{id}")
	public void delete(@PathVariable int id) {
		ser.deleteById(id);
	}

	@PutMapping("/exchange")
	public StockExchange update(@RequestBody StockExchange ex) {
		StockExchange exchange = ser.save(ex);
		return exchange;
	}

}
