package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "add_students")
public class StudentRegisterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(name = "reg_no")
    private Long regNo;
    private String email;
    private String password;
    private String year;
    private long phone;
    private String dept;

    public StudentRegisterEntity() {
        super();
    }

    public StudentRegisterEntity(String name, Long regNo, String email, String password, String year, long phone, String dept) {
        this.name = name;
        this.regNo = regNo;
        this.email = email;
        this.password = password;
        this.year = year;
        this.phone = phone;
        this.dept = dept;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Long getRegNo() {
        return regNo;
    }
    public void setRegNo(Long regNo) {
        this.regNo = regNo;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getYear() {
        return year;
    }
    public void setYear(String year) {
        this.year = year;
    }
    public long getPhone() {
        return phone;
    }
    public void setPhone(long phone) {
        this.phone = phone;
    }
    public String getDept() {
        return dept;
    }
    public void setDept(String dept) {
        this.dept = dept;
    }

}
