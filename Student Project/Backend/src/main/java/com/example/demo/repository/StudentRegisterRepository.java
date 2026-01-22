package com.example.demo.repository;

import com.example.demo.entity.StudentRegisterEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StudentRegisterRepository
        extends JpaRepository<StudentRegisterEntity, Long> {
    StudentRegisterEntity findByRegNo(Long regNo);
}

