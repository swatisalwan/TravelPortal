package com.nagarro.TravelSiteBackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nagarro.TravelSiteBackend.entity.AdminResponseEntity;
import com.nagarro.TravelSiteBackend.repository.AdminRepository;


@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	

	 public AdminResponseEntity getResponseById(String id) {
		 AdminResponseEntity resp =adminRepository.findByTicketId(id);
		 return resp;
		 }

		 public AdminResponseEntity saveResponse(AdminResponseEntity img) {
		 // TODO Auto-generated method stub
		 return adminRepository.save(img);
		 }


}
