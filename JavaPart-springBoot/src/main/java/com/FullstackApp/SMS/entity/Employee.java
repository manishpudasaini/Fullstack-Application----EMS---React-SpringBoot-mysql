package com.FullstackApp.SMS.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "empId_generator")
    @SequenceGenerator(name = "empId_generator",initialValue = 1, allocationSize = 1,sequenceName = "empId_sequence")
    private int id;
    @Column(name = "employee_name")
    private String name;
    @Column(name = "employee_address")
    private String address;
    @Column(name = "employee_phoneNum")
    private String phone;
    @Column(name = "employee_gender")
    private String gender;
    @Column(name = "employee_skill")
    private String skill;

}
