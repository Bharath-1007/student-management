package com.example.demo.controller;

import com.example.demo.entity.NewFormEntity;
import com.example.demo.entity.StudentRegisterEntity;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/save")
    public ResponseEntity<StudentRegisterEntity> saveData(@RequestBody StudentRegisterEntity studentRegisterEntity) {
       return new ResponseEntity<>(studentService.savaData(studentRegisterEntity), HttpStatus.OK);
    }

    @PostMapping("login")
    public ResponseEntity<String> login(@RequestBody StudentRegisterEntity studentRegisterEntity) {

        boolean isValid = studentService.validateLogin(
                studentRegisterEntity.getRegNo(),
                studentRegisterEntity.getpassword()
        );
        if (isValid) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid reg no or password");
        }
    }

    @PutMapping("/update/password")
    public ResponseEntity<String> updatePassword(@RequestBody StudentRegisterEntity studentRegisterEntity) {
        studentService.updatePassword(
                studentRegisterEntity.getRegNo(),
                studentRegisterEntity.getpassword()
        );
        return ResponseEntity.ok("Password updated successfully");
    }


    @PostMapping("/newform")
    public ResponseEntity<NewFormEntity> newFormData(@RequestBody NewFormEntity newFormEntity) {
        return new ResponseEntity<>(studentService.newFormData(newFormEntity), HttpStatus.OK);
    }

    @PostMapping("/history")
    public ResponseEntity<List<NewFormEntity>> getHistory(@RequestBody NewFormEntity newFormEntity) {
        List<NewFormEntity> history = studentService.history(newFormEntity.getRegNo());
        return ResponseEntity.ok(history);
    }



}
