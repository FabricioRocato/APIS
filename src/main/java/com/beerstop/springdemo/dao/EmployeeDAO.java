package com.beerstop.springdemo.dao;

import com.beerstop.springdemo.entity.Employee;

import java.util.List;

public interface EmployeeDAO {

        public List<Employee> getEmployees();

        public void saveEmployee(Employee theEmployee);

        public Employee getEmployee(int theId);

        public void deleteEmployee(int theId);


}
