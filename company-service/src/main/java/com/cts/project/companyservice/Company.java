package com.cts.project.companyservice;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "company")
@XmlRootElement(name = "companylist")
public class Company {
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String sector;
	private String ceoName;
	private String directors;
	private double turnOver;
	
	
	
	public Company() {
		
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
	public Company(int id, String name, String sector, String ceoName, String directors, double turnOver) {
		super();
		this.id = id;
		this.name = name;
		this.sector = sector;
		this.ceoName = ceoName;
		this.directors = directors;
		this.turnOver = turnOver;
	}
	

}
