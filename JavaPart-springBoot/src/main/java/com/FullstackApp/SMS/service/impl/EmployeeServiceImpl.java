package com.FullstackApp.SMS.service.impl;

import com.FullstackApp.SMS.entity.Employee;
import com.FullstackApp.SMS.repository.EmployeeRepository;
import com.FullstackApp.SMS.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee addEmployee(Employee employee) {
        Employee emp = employeeRepository.save(employee);
        return emp;
    }

    @Override
    public List<Employee> getEmployee() {
        List<Employee> employeeList = employeeRepository.findAll();
        return employeeList;
    }
}
