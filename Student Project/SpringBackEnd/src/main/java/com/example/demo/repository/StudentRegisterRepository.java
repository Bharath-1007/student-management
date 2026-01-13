package com.example.demo.repository;

import com.example.demo.entity.StudentRegisterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface StudentRegisterRepository extends JpaRepository<StudentRegisterEntity,Long> {
    Optional<StudentRegisterEntity> findByRegNo(long regNo);

}
