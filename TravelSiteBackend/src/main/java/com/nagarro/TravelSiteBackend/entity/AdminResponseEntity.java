package com.nagarro.TravelSiteBackend.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name ="AdminResponse")
public class AdminResponseEntity {
	
	@Id
	private String ticketId;
	private String fileName;
	private String comments;
	@Lob
	private byte[] pdf;
	private String status;
	private String contentType;
	
	public AdminResponseEntity() {
		super();
	}
	public AdminResponseEntity(String ticketId, String fileName, String comments, byte[] pdf, String status,String contentType) {
		super();
		this.ticketId = ticketId;
		this.fileName = fileName;
		this.comments = comments;
		this.pdf = pdf;
		this.status = status;
		this.contentType = contentType;
	}
	
	public String getTicketId() {
		return ticketId;
	}
	public void setTicketId(String ticketId) {
		this.ticketId = ticketId;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public byte[] getPdf() {
		return pdf;
	}
	public void setPdf(byte[] pdf) {
		this.pdf = pdf;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getContentType() {
		return contentType;
	}
	public void setContentType(String contentType) {
		this.contentType = contentType;
	}


}