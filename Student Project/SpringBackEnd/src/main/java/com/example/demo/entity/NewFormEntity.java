package com.example.demo.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="newform")
public class NewFormEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="s_no")
    private Long sno;
    @Column(name="name")
    private String name;
    @Column(name="reg_no")
    private long regNo;
    @Column(name="dept")
    private String deptName;
    @Column(name="year")
    private String year;
    @Column(name="from_date")
    private String fromDate;
    @Column(name="to_date")
    private String toDate;
    @Column(name="reason")
    private String reason;

    @Column(name="advisor")
    private String advisorName;
    @Column(name="mentor")
    private String mentorName;
    @Column(name="hod")
    private String hodName;
    @Column(name="timestamp")
    public LocalDateTime value;
    @PrePersist
    public void prePersist() {
        value = LocalDateTime.now();
    }



    public NewFormEntity() {
        super();
    }

    public NewFormEntity(Long sno, String name, long regNo, String deptName,String year, String fromDate, String toDate, String reason, String advisorName, String mentorName, String hodName, LocalDateTime value) {
        this.sno = sno;
        this.name = name;
        this.regNo = regNo;
        this.deptName = deptName;
        this.year=year;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.reason = reason;
        this.advisorName = advisorName;
        this.mentorName = mentorName;
        this.hodName = hodName;
        this.value = value;
    }

    public Long getSno() {
        return sno;
    }

    public void setSno(Long sno) {
        this.sno = sno;
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

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public String getFromDate() {
        return fromDate;
    }

    public void setFromDate(String fromDate) {
        this.fromDate = fromDate;
    }

    public String getToDate() {
        return toDate;
    }

    public void setToDate(String toDate) {
        this.toDate = toDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getAdvisorName() {
        return advisorName;
    }

    public void setAdvisorName(String advisorStatus)
    {

        this.advisorName = advisorName;
    }

    public String getMentorName() {
        return mentorName;
    }

    public void setMentorName(String mentorName) {
        this.mentorName = mentorName;
    }

    public String getHodName() {
        return hodName;
    }

    public void setHodName(String hodName) {
        this.hodName = hodName;
    }

    public LocalDateTime getValue() {
        return value;
    }

    public void setValue(LocalDateTime value) {
        this.value = value;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}
