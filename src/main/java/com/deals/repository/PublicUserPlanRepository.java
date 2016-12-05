package com.deals.repository;

import javax.transaction.Transactional;

import com.deals.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.deals.model.PublicUserPlan;

@Transactional
public interface PublicUserPlanRepository extends JpaRepository<PublicUserPlan, Long>{

	PublicUserPlan findByUserId(Long id);
	PublicUserPlan findByQrCodeEncryptedQrCode(String encryptedQrCode);
	void deleteByUser(User user);
}
