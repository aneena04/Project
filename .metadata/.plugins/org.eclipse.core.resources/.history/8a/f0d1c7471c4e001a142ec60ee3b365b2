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
import com.cts.training.dao.SectorDAO;
import com.cts.training.model.Company;
import com.cts.training.model.SectorEntity;

@Controller
public class SectorController {

	@Autowired
	SectorDAO sectorDAO;

	@GetMapping("/sector-home")
	public String sectorPage(Model model) {
		List<SectorEntity> sector=sectorDAO.getAllSectors();
		model.addAttribute("list", sector);
		model.addAttribute("sector", new SectorEntity());// user will work as a model attribute in a form
		return "sectoroperations";
	}

	@PostMapping("/sector/save")
	// or @RequestMapping(value="/user/save",method=RequestMethod.post)
	public String addSector(@ModelAttribute("sector") SectorEntity sector) {
		sectorDAO.addSector(sector);
		return "redirect:/sector-home";
	}

	@GetMapping("/sector/remove/{id}") // {}----path variable
	public String deleteCompany(@PathVariable("id") int id) // or (@RequestParam("id")int id)<c:url
															// value='/remove?id=${user.id}
	{
		SectorEntity sector = sectorDAO.getSectorById(id);
		sectorDAO.deleteSector(sector);
		return "redirect:/sector-home";
	}

}
