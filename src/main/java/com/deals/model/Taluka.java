package com.deals.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@Entity
public class Taluka {
	
	@Id
	private Long id;
	private String name;
	
	@ManyToOne
	private City city;
	
}