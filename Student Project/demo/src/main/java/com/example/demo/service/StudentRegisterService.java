package com.example.demo.service;

import com.example.demo.entity.NewFormEntity;
import com.example.demo.entity.StudentRegisterEntity;
import com.example.demo.repository.NewFormRepository;
import com.example.demo.repository.StudentRegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentRegisterService
{
    @Autowired
    private StudentRegisterRepository studentRegisterRepository;
    @Autowired
    private NewFormRepository newFormRepository;
    public StudentRegisterEntity savaData(StudentRegisterEntity studentRegisterEntity)
    {
            return studentRegisterRepository.save(studentRegisterEntity);
    }

    public boolean validateLogin(Long regNo, String password) {

        if (regNo == null || password == null) {
            return false;
        }

        StudentRegisterEntity user =
                studentRegisterRepository.findByRegNo(regNo);

        if (user == null || user.getPassword() == null) {
            return false;
        }

        return user.getPassword().equals(password);
    }


//    public StudentRegisterEntity updatePassword(long regNo, String newPassword) {
//
//        StudentRegisterEntity student = studentRegisterRepository
//                .findByRegNo(regNo)
//                .orElseThrow(() -> new RuntimeException("Student not found"));
//        student.setPassword(newPassword);
//        return studentRegisterRepository.save(student);
//    }

    public NewFormEntity newFormData(NewFormEntity newFormEntity)
    {
        return newFormRepository.save(newFormEntity);
    }
    public List<NewFormEntity> history(long regNo) {
        return newFormRepository.findByRegNo(regNo);
    }
}
