package com.nagarro.TravelSiteBackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import org.springframework.stereotype.Service;
import com.nagarro.TravelSiteBackend.entity.TicketEntity;
import com.nagarro.TravelSiteBackend.model.TicketModel;
import com.nagarro.TravelSiteBackend.repository.TicketRepository;



@Service
public class TicketServices {

@Autowired
private TicketRepository ticketRepository;
	

public void submitTicket(TicketModel ticketRequest) {
	TicketEntity newTicket =new TicketEntity(ticketRequest.getTicketId(),ticketRequest.getSubmittedDate(),
			ticketRequest.getEmailId(),ticketRequest.getRequestType(),ticketRequest.getPriority(),ticketRequest.getToTravelCity(),
			ticketRequest.getFromTravelCity(),ticketRequest.getStartDate(),ticketRequest.getEndDate(),ticketRequest.getPassportNumber(),
			ticketRequest.getProjectName(),ticketRequest.getExpenseBy(),ticketRequest.getApprovedBy(),ticketRequest.getDuration(),ticketRequest.isUpperBoundAllowed(),
			ticketRequest.getUpperBound(),ticketRequest.getAdditionalDetails(),ticketRequest.getStatus(),ticketRequest.getFirstName());
	 
	ticketRepository.save(newTicket);
	
}


public Page<TicketEntity> getTicketsByUsername(String user,int page,int i) {
	return ticketRepository.findByEmailId(user, PageRequest.of(page, i));
}


public String updateTicket(TicketModel updatedDataRequest) {
	
	TicketEntity initialData= ticketRepository.findByTicketId(updatedDataRequest.getTicketId());
	
	TicketEntity updatedDataResponse =new TicketEntity(updatedDataRequest.getTicketId(),updatedDataRequest.getSubmittedDate(),
			updatedDataRequest.getEmailId(),updatedDataRequest.getRequestType(),updatedDataRequest.getPriority(),updatedDataRequest.getToTravelCity(),
			updatedDataRequest.getFromTravelCity(),updatedDataRequest.getStartDate(),updatedDataRequest.getEndDate(),updatedDataRequest.getPassportNumber(),
			updatedDataRequest.getProjectName(),updatedDataRequest.getExpenseBy(),updatedDataRequest.getApprovedBy(),updatedDataRequest.getDuration(),updatedDataRequest.isUpperBoundAllowed(),
			updatedDataRequest.getUpperBound(),updatedDataRequest.getAdditionalDetails(),updatedDataRequest.getStatus(),updatedDataRequest.getFirstName());
	
	initialData=updatedDataResponse;
	ticketRepository.save(initialData);
	
	return "Data updated successfully";
	
}


public List<TicketEntity> getTicketsByUsernames() {
	
	return ticketRepository.findAll();
	
}

public String updateStatus(String id, String status) {
	
	TicketEntity object= ticketRepository.findByTicketId(id);
	object.setStatus(status);
	ticketRepository.save(object);
	return "Status updated successfully";
	
}




}
