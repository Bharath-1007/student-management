package com.example.demo.service;

import com.example.demo.entity.AdminRegisterEntity;
import com.example.demo.repository.AdminRegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRegisterRepository adminRegisterRepository;

    public AdminRegisterEntity saveData(AdminRegisterEntity adminRegisterEntity)
    {
        return adminRegisterRepository.save(adminRegisterEntity);
    }
}
