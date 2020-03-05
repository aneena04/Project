package com.cts.project.stockexchangeservice;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.stereotype.Component;

@Entity
@Component
@Table(name = "exchange")
@XmlRootElement(name = "exchange")

public class StockExchange {

	@Id
	@GeneratedValue
	private int id;
	private String exchangename;
	private String contactAddress;
	private String brief;
	private String remarks;

	public StockExchange() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getExchangename() {
		return exchangename;
	}

	public void setExchangename(String exchangename) {
		this.exchangename = exchangename;
	}

	public String getContactAddress() {
		return contactAddress;
	}

	public void setContactAddress(String contactAddress) {
		this.contactAddress = contactAddress;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public StockExchange(int id, String exchangename, String contactAddress, String brief, String remarks) {
		super();
		this.id = id;
		this.exchangename = exchangename;
		this.contactAddress = contactAddress;
		this.brief = brief;
		this.remarks = remarks;
	}

}

