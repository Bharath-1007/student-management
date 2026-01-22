package com.example.demo.dto;

public class StudentLogin {

    private Long regNo;   // ⚠️ USE Long
    private String password;

    public Long getRegNo() {
        return regNo;
    }

    public void setRegNo(Long regNo) {
        this.regNo = regNo;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}