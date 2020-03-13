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
import com.cts.training.dao.IPODAO;
import com.cts.training.model.Company;
import com.cts.training.model.IPOEntity;
import com.cts.training.model.SectorEntity;

@Controller
public class IPOController {

	@Autowired
	IPODAO ipoDAO;
	
	
	@GetMapping("/ipo-home")
	public String companyPage(Model model)
	{
		List<IPOEntity> ipo=ipoDAO.getAllIPOs();
		model.addAttribute("list", ipo);
		model.addAttribute("ipo", new IPOEntity());//user will work as a model attribute in a form
		return "ipooperations";
	}
	
	@PostMapping("/ipo/save")
	//or @RequestMapping(value="/user/save",method=RequestMethod.post)
	public String addUser(@ModelAttribute("ipo") IPOEntity ipo)
	{
		ipoDAO.addIPO(ipo);
		return "redirect:/ipo-home";
	}
	@GetMapping("/ipo/remove/{id}") // {}----path variable
	public String deleteCompany(@PathVariable("id") int id) // or (@RequestParam("id")int id)<c:url
															// value='/remove?id=${user.id}
	{
	IPOEntity sector = ipoDAO.getIPOById(id);
		ipoDAO.deleteIPO(sector);
		return "redirect:/ipo-home";
	}


}
