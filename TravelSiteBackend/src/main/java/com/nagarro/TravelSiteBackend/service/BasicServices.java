package com.nagarro.TravelSiteBackend.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.TravelSiteBackend.dto.MailResponse;

import com.nagarro.TravelSiteBackend.entity.UserEntity;

import com.nagarro.TravelSiteBackend.model.UserModel;
import com.nagarro.TravelSiteBackend.repository.UserRepository;

@Service
public class BasicServices {
	
	@Autowired
	private ForgetEmailService forgetservice;
	
	@Autowired
	private UserRepository userRepository;
	
	

	@Autowired
	private EmailService emailservice;
	
	public UserModel getUserRoles(String username)
	{
		 
		UserEntity loginUser=userRepository.findByEmail(username);
		
		UserModel user =new UserModel(loginUser.getFirstName(),loginUser.getLastName(),loginUser.getBusinessUnit(),
				loginUser.getTitle(),loginUser.getEmail(),loginUser.getTelephone(),loginUser.getAddress1(),
				loginUser.getAddress2(),loginUser.getCity(),loginUser.getState(),loginUser.getZip(),loginUser.getCountry(),
				loginUser.getPassword(),loginUser.getRole());
		
		return user;
	}
	
	
	public MailResponse getUser(String email) {
		
		UserEntity newUser=userRepository.findByEmail(email);
		
		Map<String, Object> model = new HashMap<>();		
		model.put("name", newUser.getFirstName());
		model.put("email",newUser.getEmail());
		model.put("password",newUser.getPassword());
		
		return forgetservice.sendForgetEmail(newUser, model);
	}
	
	public MailResponse registerUser(UserModel userRequest) {
		
		UserEntity user =new UserEntity(userRequest.getFirstName(),userRequest.getLastName(),userRequest.getBusinessUnit(),
				userRequest.getTitle(),userRequest.getEmail(),userRequest.getTelephone(),userRequest.getAddress1(),
				userRequest.getAddress2(),userRequest.getCity(),userRequest.getState(),userRequest.getZip(),userRequest.getCountry(),
				userRequest.getPassword(),userRequest.getRole());
		 userRepository.save(user);
		 
		 Map<String, Object> model = new HashMap<>();		
			model.put("name", userRequest.getFirstName());
			model.put("email", userRequest.getEmail());
			model.put("password", userRequest.getPassword());
		return emailservice.sendEmail(userRequest, model);
		 
		 
	}

	
	
	
	
//	public UserEntity getUser(String email) {
//	System.out.print("Hieee" +"hlo"+ email);
//	UserEntity newUser=repository.findByEmail(email);
//	System.out.println("Hi" + newUser);
//	return repository.findByEmail(email);
//}
	
	
}
