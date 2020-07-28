package com.nagarro.TravelSiteBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.TravelSiteBackend.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,String> {

	public UserEntity findByCity(String city);
	public UserEntity findByEmail(String username);

}