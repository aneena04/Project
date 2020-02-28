package com.cts.project.dto;

public class StockExchangeDTO {
	
	private int id;
	private String exchangename;
	private String contactAddress;
	private String brief;
	private String remarks;

	public StockExchangeDTO() {

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

	public StockExchangeDTO(int id, String exchangename, String contactAddress, String brief, String remarks) {
		super();
		this.id = id;
		this.exchangename = exchangename;
		this.contactAddress = contactAddress;
		this.brief = brief;
		this.remarks = remarks;
	}


}
