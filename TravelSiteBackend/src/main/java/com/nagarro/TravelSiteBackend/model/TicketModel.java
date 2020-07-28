package com.nagarro.TravelSiteBackend.model;
import java.sql.Date;

public class TicketModel {
	
	public TicketModel(String ticketId, Date submittedDate, String emailId, String requestType, String priority,
			String toTravelCity, String fromTravelCity, Date startDate, Date endDate, String passportNumber,
			String projectName, String expenseBy, String approvedBy, String duration, String upperBoundAllowed,
			String upperBound, String additionalDetails, String status,String firstName) {
		super();
		this.ticketId = ticketId;
		this.submittedDate = submittedDate;
		this.emailId = emailId;
		this.requestType = requestType;
		this.priority = priority;
		this.toTravelCity = toTravelCity;
		this.fromTravelCity = fromTravelCity;
		this.startDate = startDate;
		this.endDate = endDate;
		this.passportNumber = passportNumber;
		this.projectName = projectName;
		this.expenseBy = expenseBy;
		this.approvedBy = approvedBy;
		this.duration = duration;
		this.upperBoundAllowed = upperBoundAllowed;
		this.upperBound = upperBound;
		this.additionalDetails = additionalDetails;
		this.status = status;
		this.firstName = firstName;
	}
	public TicketModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	private String ticketId;
	private Date submittedDate;
	private String emailId;
	private String requestType;
	private String priority;
	private String toTravelCity;
	private String fromTravelCity;
	private Date startDate;
	private Date endDate;
	private String passportNumber;
	private String projectName;
	private String expenseBy;
	private String approvedBy;
	private String duration; ///Type???
	private String upperBoundAllowed; 
	private String upperBound;
	private String additionalDetails;
	private String status;
	private String firstName;
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getTicketId() {
		return ticketId;
	}
	public void setTicketId(String ticketId) {
		this.ticketId = ticketId;
	}
	public Date getSubmittedDate() {
		return submittedDate;
	}
	public void setTicketDate(Date submittedDate) {
		this.submittedDate = submittedDate;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getRequestType() {
		return requestType;
	}
	public void setRequestType(String requestType) {
		this.requestType = requestType;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getToTravelCity() {
		return toTravelCity;
	}
	public void setToTravelCity(String toTravelCity) {
		this.toTravelCity = toTravelCity;
	}
	public String getFromTravelCity() {
		return fromTravelCity;
	}
	public void setFromTravelCity(String fromTravelCity) {
		this.fromTravelCity = fromTravelCity;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getPassportNumber() {
		return passportNumber;
	}
	public void setPassportNumber(String passportNumber) {
		this.passportNumber = passportNumber;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getExpenseBy() {
		return expenseBy;
	}
	public void setExpenseBy(String expenseBy) {
		this.expenseBy = expenseBy;
	}
	public String getApprovedBy() {
		return approvedBy;
	}
	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String isUpperBoundAllowed() {
		return upperBoundAllowed;
	}
	public void setUpperBoundAllowed(String upperBoundAllowed) {
		this.upperBoundAllowed = upperBoundAllowed;
	}
	public String getUpperBound() {
		return upperBound;
	}
	public void setUpperBound(String upperBound) {
		this.upperBound = upperBound;
	}
	public String getAdditionalDetails() {
		return additionalDetails;
	}
	public void setAdditionalDetails(String additionalDetails) {
		this.additionalDetails = additionalDetails;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	

}
