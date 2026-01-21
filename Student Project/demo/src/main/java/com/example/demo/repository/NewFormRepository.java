package com.example.demo.repository;

import com.example.demo.entity.NewFormEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NewFormRepository extends JpaRepository<NewFormEntity,Long> {
    List<NewFormEntity> findByRegNo(long regNo);
}
