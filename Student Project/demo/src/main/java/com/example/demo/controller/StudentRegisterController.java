package com.example.demo.controller;

import com.example.demo.entity.NewFormEntity;
import com.example.demo.entity.StudentRegisterEntity;
import com.example.demo.repository.NewFormRepository;
import com.example.demo.service.StudentRegisterService;
import com.example.demo.dto.StudentLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentRegisterController {

    @Autowired
    private StudentRegisterService studentRegisterService;
    @Autowired
    private NewFormRepository newFormRepository;
    @PostMapping("/save")
    public ResponseEntity<StudentRegisterEntity> saveData(@RequestBody StudentRegisterEntity studentRegisterEntity) {
       return new ResponseEntity<>(studentRegisterService.savaData(studentRegisterEntity), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody StudentLogin studentLogin) {

        boolean isValid = studentRegisterService.validateLogin(
                studentLogin.getRegNo(),
                studentLogin.getPassword()
        );

        return isValid
                ? ResponseEntity.ok("Login successful")
                : ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Invalid reg no or password");
    }
//    @PutMapping("/update/password")
//    public ResponseEntity<String> updatePassword(@RequestBody StudentRegisterEntity studentRegisterEntity) {
//        studentService.updatePassword(
//                studentRegisterEntity.getRegNo(),
//                studentRegisterEntity.getpassword()
//        );
//        return ResponseEntity.ok("Password updated successfully");
//    }


    @PostMapping("/newform")
    public ResponseEntity<NewFormEntity> newFormData(@RequestBody NewFormEntity newFormEntity) {
        return new ResponseEntity<>(studentRegisterService.newFormData(newFormEntity), HttpStatus.OK);
    }

    @PostMapping("/history")
    public ResponseEntity<List<NewFormEntity>> getHistory(@RequestBody NewFormEntity newFormEntity) {
        List<NewFormEntity> history = studentRegisterService.history(newFormEntity.getRegNo());
        return ResponseEntity.ok(history);
    }

}
