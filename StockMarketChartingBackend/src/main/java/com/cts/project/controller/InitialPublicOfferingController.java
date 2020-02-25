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

import com.cts.project.bean.InitialPublicOffering;
import com.cts.project.repo.InitialPublicOfferingRepo;
	@CrossOrigin(origins = "*")
	@RestController
	public class InitialPublicOfferingController {
		@Autowired
		InitialPublicOfferingRepo ipor;
		@GetMapping("/ipo")
		public List<InitialPublicOffering> findAll(){
			return ipor.findAll();
		}
		@GetMapping("/ipo/{id}")
		public InitialPublicOffering findOne(@PathVariable int id) {
			Optional<InitialPublicOffering> ip = ipor.findById(id);
			InitialPublicOffering ipo = ip.get();
			return ipo;
		}
		@PostMapping("/ipo")
		public InitialPublicOffering save(@RequestBody InitialPublicOffering ip) {
			InitialPublicOffering ipo= ipor.save(ip);
			return ipo;
		}
		@DeleteMapping("/ipo/{id}")
		public void delete(@PathVariable int id) {
			ipor.deleteById(id);
		}
		@PutMapping("/ipo")
		public InitialPublicOffering update(@RequestBody InitialPublicOffering ip) {
			InitialPublicOffering ipo = ipor.save(ip);
			return ipo;
		}
}
