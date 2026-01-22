package com.example.demo.service;

import com.example.demo.entity.AdminRegisterEntity;
import com.example.demo.repository.AdminRegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService
{
    @Autowired
    private AdminRegisterRepository adminRegisterRepository;

    public AdminRegisterEntity saveData(AdminRegisterEntity adminRegisterEntity)
    {
        return adminRegisterRepository.save(adminRegisterEntity);
    }

    public boolean validateAdminLogin(String email, String password) {

        if (email == null || password == null) {
            return false;
        }

        AdminRegisterEntity user =
                adminRegisterRepository.findByEmail(email);

        if (user == null || user.getPassword() == null) {
            return false;
        }

        return user.getPassword().equals(password);
    }
}
