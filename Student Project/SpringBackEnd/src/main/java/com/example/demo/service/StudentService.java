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
public class StudentService {
    @Autowired
    private StudentRegisterRepository studentRegisterRepository;
    @Autowired
    private NewFormRepository newFormRepository;
    public StudentRegisterEntity savaData(StudentRegisterEntity studentRegisterEntity)
    {
            return studentRegisterRepository.save(studentRegisterEntity);
    }

    public boolean validateLogin(long regNo, String password) {
        Optional<StudentRegisterEntity> user = studentRegisterRepository.findByRegNo(regNo);
        return user.isPresent() && user.get().getpassword().equals(password);
    }

    public StudentRegisterEntity updatePassword(long regNo, String newPassword) {

        StudentRegisterEntity student = studentRegisterRepository
                .findByRegNo(regNo)
                .orElseThrow(() -> new RuntimeException("Student not found"));
        student.setpassword(newPassword);
        return studentRegisterRepository.save(student);
    }

    public NewFormEntity newFormData(NewFormEntity newFormEntity)
    {
        return newFormRepository.save(newFormEntity);
    }
    public List<NewFormEntity> history(long regNo) {
        return newFormRepository.findByRegNo(regNo);
    }

}
