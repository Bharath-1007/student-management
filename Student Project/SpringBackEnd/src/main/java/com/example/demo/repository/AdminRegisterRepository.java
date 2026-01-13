package com.example.demo.repository;

import com.example.demo.entity.AdminRegisterEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRegisterRepository extends JpaRepository<AdminRegisterEntity,Long> {
}
