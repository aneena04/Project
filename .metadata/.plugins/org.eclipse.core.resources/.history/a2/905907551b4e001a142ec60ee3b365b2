package com.cts.training.middle.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.cts.training.dao.CompanyDAO;
import com.cts.training.dao.RegisterDAO;
import com.cts.training.model.Company;
import com.cts.training.model.Register;

@Controller
public class CompanyController {

	@Autowired
	CompanyDAO companyDAO;
	
	
	@GetMapping("/company-home")
	public String companyPage(Model model)
	{
		
		model.addAttribute("company", new Company());//user will work as a model attribute in a form
		return "companyoperations";
	}
	
	@PostMapping("/company/save")
	//or @RequestMapping(value="/user/save",method=RequestMethod.post)
	public String addUser(@ModelAttribute("company") Company company)
	{
		companyDAO.saveCompany(company);
		return "redirect:/company-home";
	}
	@GetMapping("/company/remove/{id}")//{}----path variable
	public String deleteCompany(@PathVariable("id")int id) //  or (@RequestParam("id")int id)<c:url value='/remove?id=${user.id}
	{	
	Company company=companyDAO.getCompanyById(id);
	companyDAO.deleteCompany(company);
		return "redirect:/company-home";
	}
}


