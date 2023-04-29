package com.FullstackApp.SMS.controller;

import com.FullstackApp.SMS.entity.Employee;
import com.FullstackApp.SMS.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {
    private final EmployeeService employeeService;
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/add")
    public String addEmployee(@RequestBody Employee employee){
        employeeService.addEmployee(employee);
        return "Employee added successfully in database";
    }

    @GetMapping("/get")
    public List<Employee> getEmployee(){
        List<Employee> employeeList = employeeService.getEmployee();
        return employeeList;
    }
}
