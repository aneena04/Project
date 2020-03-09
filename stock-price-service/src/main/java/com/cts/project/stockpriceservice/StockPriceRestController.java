package com.cts.project.stockpriceservice;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cts.project.stockpriceservice.feign.CompanyServiceProxy;


@CrossOrigin(origins = "*")
@RestController
public class StockPriceRestController {
	
	Logger logger=LoggerFactory.getLogger(this.getClass());
	@Autowired
	private CompanyServiceProxy  proxy;
	
	
	StockPriceService stockPriceService;
	
	@Autowired
	StockPriceRepo stockPriceRepo;

	@GetMapping("/stockprice")
	public List<StockPrice> findAll() {
		return stockPriceRepo.findAll();
	}

	@GetMapping("/stockprice/{id}")
	public StockPrice findOne(@PathVariable int id) {
		Optional<StockPrice> stockp = stockPriceRepo.findById(id);
		StockPrice stockprice = stockp.get();
		return stockprice;
	}

	@PostMapping("/stockprice")
	public StockPrice save(@RequestBody StockPrice stockp) {
		StockPrice stockprice = stockPriceRepo.save(stockp);
		return stockprice;
	}
	@PostMapping(value = "stockPrices/uploadStockSheet",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> uploadStocksSheet(@RequestParam("stockSheet") MultipartFile file)
	{
		logger.info("FILE RECEIVED: {}",file.getOriginalFilename());
		if(file.getOriginalFilename().endsWith(".xls") || file.getOriginalFilename().endsWith(".xlsx"))
		{
			try {
				return new ResponseEntity<ImportSummary>(stockPriceService.addStockPricesFromExcelSheet(file),HttpStatus.OK);
			} catch(IOException e) {
				e.printStackTrace();
				return new ResponseEntity<String>("Error Reading File", HttpStatus.BAD_REQUEST);
			}
			catch(Exception e) {
				e.printStackTrace();
				return new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
			}
		}
		else
		{
				return new ResponseEntity<String>("Wrong File Extension . the File Should be .xls or .xlsx file.",HttpStatus.BAD_REQUEST);
		}
	}
	
		
	
	
	
	
	
	

	@DeleteMapping("/stockprice/{id}")
	public void delete(@PathVariable int id) {
		stockPriceRepo.deleteById(id);
	}

	@PutMapping("/stockprice")
	public StockPrice update(@RequestBody StockPrice stockp) {
		StockPrice stockprice = stockPriceRepo.save(stockp);
		return stockprice;

	}
	
	@GetMapping("/stockPrice/company")
	public List<CompanyDTO> getAllCompanyByStockPrice() {
		logger.info("Get all Company...invoked?");
		List<CompanyDTO> companyDto=proxy.findAll();
		logger.info("Information ---> {}",companyDto);
		return companyDto;
	}

}
