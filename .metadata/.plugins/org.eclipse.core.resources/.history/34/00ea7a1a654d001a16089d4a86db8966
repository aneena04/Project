package com.cts.training.middle.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cts.training.dao.CompanyDAO;
import com.cts.training.dao.IPODAO;
import com.cts.training.dao.RegisterDAO;
import com.cts.training.dao.SectorDAO;
import com.cts.training.dao.StockExchangeDAO;
import com.cts.training.model.Company;
import com.cts.training.model.IPOEntity;
import com.cts.training.model.Register;
import com.cts.training.model.SectorEntity;
import com.cts.training.model.StockExchangeEntity;

@Controller
public class HomeController {
	
	@Autowired
	private RegisterDAO registerDAO;
	
	
	
	
//	@GetMapping("/") --- In spring 4.3 version and above
	@RequestMapping("/index")
	public String indexPage(Model model) 
	{
		model.addAttribute("message", "Welcome to Spring MVC");
	//	List<String> names=new ArrayList<String>();
		List<Register> users= registerDAO.getAllUsers();
		model.addAttribute("list", users);
		
		//addNames(names);
	//	model.addAttribute("list", names);
		return "index";
	}

////	private void addNames(List<String> names) {
////		names.add("Divya");
////		names.add("Hameemsha");
////		names.add("Sindhu");
////		names.add("Aneena");
////		
//		
////	}
	
	@Autowired
	private CompanyDAO companyDAO;
	
	@RequestMapping("/companies")
	public String companyPage(Model model) {
		List<Company> company=companyDAO.getAllCompanies();
		model.addAttribute("list", company);
		return "company";
	}
	
	@Autowired
	private IPODAO ipoDAO;
	
	@RequestMapping("/ipo")
	public String ipoPage(Model model) {
		List<IPOEntity> ipo=ipoDAO.getAllIPOs();
		model.addAttribute("list", ipo);
		return "ipo";
	}
	@Autowired
	private SectorDAO sectorDAO;
	
	@RequestMapping("/sector")
	public String sectorPage(Model model) {
		List<SectorEntity> sector=sectorDAO.getAllSectors();
		model.addAttribute("list", sector);
		return "sector";
	}
	
	@Autowired
	private StockExchangeDAO stockExchangeDAO;
	
	@RequestMapping("/stock")
	public String stockExchangePage(Model model) {
		List<StockExchangeEntity> stock=stockExchangeDAO.getAllStockExchanges();
		model.addAttribute("list", stock);
		return "stock";
	}
	
}
