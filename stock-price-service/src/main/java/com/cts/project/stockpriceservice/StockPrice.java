
package com.cts.project.stockpriceservice;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
//
//@Entity
//@Table(name = "stockprice")
//@XmlRootElement(name = "stockprice")
//public class StockPrice {
//	
//	@Id
//	@GeneratedValue
//	private int id;
//	private int companyCode;
//	private String stockExchange;
//	private int currentPrice;
//	private String date;
//	private String time;
//	
//	public StockPrice(){
//		
//	}
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public int getCompanyCode() {
//		return companyCode;
//	}
//
//	public void setCompanyCode(int companyCode) {
//		this.companyCode = companyCode;
//	}
//
//	public String getStockExchange() {
//		return stockExchange;
//	}
//
//	public void setStockExchange(String stockExchange) {
//		this.stockExchange = stockExchange;
//	}
//
//	public int getCurrentPrice() {
//		return currentPrice;
//	}
//
//	public void setCurrentPrice(int currentPrice) {
//		this.currentPrice = currentPrice;
//	}
//
//	public String getDate() {
//		return date;
//	}
//
//	public void setDate(String date) {
//		this.date = date;
//	}
//
//	public String getTime() {
//		return time;
//	}
//
//	public void setTime(String time) {
//		this.time = time;
//	}
//
//	public StockPrice(int id, int companyCode, String stockExchange, int currentPrice, String date, String time) {
//		super();
//		this.id = id;
//		this.companyCode = companyCode;
//		this.stockExchange = stockExchange;
//		this.currentPrice = currentPrice;
//		this.date = date;
//		this.time = time;
//	}
//	
//}





@Entity
@Table(name = "stockprices")
@XmlRootElement(name = "stockpricelists")
public class StockPrice {
	private String companyCode;
	private String stockExchangeName;
	private Long stockPrice;
	private LocalDate date;
	private LocalTime time;
	public StockPrice() {}
	public StockPrice(String companyCode, String stockExchangeName, Long stockPrice, LocalDate date,
			LocalTime time) {
		super();
		this.companyCode = companyCode;
		this.stockExchangeName = stockExchangeName;
		this.stockPrice = stockPrice;
		this.date = date;
		this.time = time;
	}
	public String getCompanyCode() {
		return companyCode;
	}
	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}
	public String getStockExchangeName() {
		return stockExchangeName;
	}
	public void setStockExchangeName(String stockExchangeName) {
		this.stockExchangeName = stockExchangeName;
	}
	public Long getStockPrice() {
		return stockPrice;
	}
	public void setStockPrice(Long stockPrice) {
		this.stockPrice = stockPrice;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getTime() {
		return time;
	}
	public void setTime(LocalTime time) {
		this.time = time;
	}
}