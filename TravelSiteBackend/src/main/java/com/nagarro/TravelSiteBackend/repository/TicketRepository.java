package com.nagarro.TravelSiteBackend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.TravelSiteBackend.entity.TicketEntity;

@Repository
public interface TicketRepository extends JpaRepository<TicketEntity,String>  {
	
	public Page<TicketEntity> findByEmailId(String username, Pageable pageable);
	
	public TicketEntity findByTicketId(String ticketId);


}
