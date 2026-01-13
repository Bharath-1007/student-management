package com.example.demo.controller;

import com.example.demo.entity.AdminRegisterEntity;
import com.example.demo.entity.StudentRegisterEntity;
import com.example.demo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/save")
    public ResponseEntity<AdminRegisterEntity> saveData(@RequestBody AdminRegisterEntity adminRegisterEntity) {
        System.out.println("Received: " + adminRegisterEntity.getName() + ", " + adminRegisterEntity.getEmail());
        //System.out.println("Received: " + adminRegisterEntity);
        return new ResponseEntity<>(adminService.saveData(adminRegisterEntity), HttpStatus.OK);
    }

}
