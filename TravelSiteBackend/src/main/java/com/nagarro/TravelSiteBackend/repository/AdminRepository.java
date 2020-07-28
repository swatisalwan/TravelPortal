package com.nagarro.TravelSiteBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nagarro.TravelSiteBackend.entity.AdminResponseEntity;



@Repository
public interface AdminRepository extends JpaRepository<AdminResponseEntity,String>{
	
	public AdminResponseEntity findByTicketId(String ticketId);
	

}
