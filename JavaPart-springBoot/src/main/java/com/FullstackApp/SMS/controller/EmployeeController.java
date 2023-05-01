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

    //add employee in the database
    @PostMapping("/add")
    public String addEmployee(@RequestBody Employee employee){
        employeeService.addEmployee(employee);
        return "Employee added successfully in database";
    }

    // get list of employee
    @GetMapping("/get")
    public List<Employee> getEmployee(){
        List<Employee> employeeList = employeeService.getEmployee();
        return employeeList;
    }

    //delete employee
    @GetMapping("/delete/{id}")
    public String deleteEmployee(@PathVariable int id){
        employeeService.deleteEmployee(id);
        return "employee deleted successfully!!!";
    }

    @PutMapping ("/update/{id}")
    public Employee updateEmployee(@PathVariable int id,@RequestBody Employee employee){
        System.out.println(id);
       Employee updatedEmp =  employeeService.updateEmployee(id,employee);
        System.out.println(updatedEmp);

        return updatedEmp;
    }
}
