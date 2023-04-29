package com.FullstackApp.SMS.service;

import com.FullstackApp.SMS.entity.Employee;
import jdk.dynalink.linker.LinkerServices;

import java.util.List;

public interface EmployeeService {
    Employee addEmployee(Employee employee);
    List<Employee> getEmployee();
}
