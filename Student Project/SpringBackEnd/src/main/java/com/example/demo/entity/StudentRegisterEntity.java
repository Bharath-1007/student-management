package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "student_register")
public class StudentRegisterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(name = "reg_no")
    private long regNo;
    private String email;
    private String password;

    public StudentRegisterEntity() {
        super();
    }

    public StudentRegisterEntity(String name, long regNo, String email, String password) {
        this.name = name;
        this.regNo = regNo;
        this.email = email;
        this.password = password;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public long getRegNo() {
        return regNo;
    }
    public void setRegNo(long regNo) {
        this.regNo = regNo;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getpassword() {
        return password;
    }
    public void setpassword(String password) {
        this.password = password;
    }
}
