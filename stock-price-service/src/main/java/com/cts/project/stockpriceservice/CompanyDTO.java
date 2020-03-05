package com.cts.project.stockpriceservice;

public class CompanyDTO {
	private int id;
	private String name;
	private String sector;
	private String ceoName;
	private String directors;
	private double turnOver;
	
	
	
	public CompanyDTO() {
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public String getCeoName() {
		return ceoName;
	}
	public void setCeoName(String ceoName) {
		this.ceoName = ceoName;
	}
	public String getDirectors() {
		return directors;
	}
	public void setDirectors(String directors) {
		this.directors = directors;
	}
	public double getTurnOver() {
		return turnOver;
	}
	public void setTurnOver(double turnOver) {
		this.turnOver = turnOver;
	}
	public CompanyDTO(int id, String name, String sector, String ceoName, String directors, double turnOver) {
		super();
		this.id = id;
		this.name = name;
		this.sector = sector;
		this.ceoName = ceoName;
		this.directors = directors;
		this.turnOver = turnOver;
	}
	


}
