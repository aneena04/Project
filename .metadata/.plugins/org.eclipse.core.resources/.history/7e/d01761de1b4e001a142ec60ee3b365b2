package com.cts.training.middle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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
		List<StockExchangeEntity> stock=stockDAO.getAllStockExchanges();
		model.addAttribute("list", stock);
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
	@GetMapping("/exchange/remove/{id}")//{}----path variable
	public String deleteStockExchange(@PathVariable("id")int id) //  or (@RequestParam("id")int id)<c:url value='/remove?id=${user.id}
	{	
	StockExchangeEntity exchange=stockDAO.getStockExchangeById(id);
	stockDAO.deleteStockExchange(exchange);
		return "redirect:/exchange-home";
	}
	
	
}
