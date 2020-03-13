package com.cts.training.middle.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.cts.training.dao.CompanyDAO;
import com.cts.training.dao.StockExchangeDAO;
import com.cts.training.model.Company;
import com.cts.training.model.StockExchangeEntity;

@Controller
public class ExchangeController {

	@Autowired
	StockExchangeDAO stockDAO;
	
	
	@GetMapping("/exchange-home")
	public String exchangePage(Model model)
	{
		model.addAttribute("exchange", new StockExchangeEntity());//user will work as a model attribute in a form
		return "exchangeoperations";
	}
	
	@PostMapping("/exchange/save")
	//or @RequestMapping(value="/user/save",method=RequestMethod.post)
	public String addUser(@ModelAttribute("exchange") StockExchangeEntity stock)
	{
		stockDAO.addStockExchange(stock);
		return "redirect:/exchange-home";
	}
	
	
}
