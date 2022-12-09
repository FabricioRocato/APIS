package com.beerstop.springdemo.service;

import java.util.List;

import com.beerstop.springdemo.dao.ClientDAO;
import com.beerstop.springdemo.dao.EmployeeDAO;
import com.beerstop.springdemo.dao.ProductDAO;
import com.beerstop.springdemo.entity.Employee;
import com.beerstop.springdemo.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.beerstop.springdemo.entity.Client;

@Service
public class ServiceImpl implements ClientService, EmployeeService, ProductService {

	// need to inject customer dao
	@Autowired
	private ClientDAO clientDAO;
	
	@Override
	@Transactional
	public List<Client> getClients() {
		return clientDAO.getClients();
	}


	@Override
	@Transactional
	public void saveClient(Client theClient) {

		clientDAO.saveClient(theClient);
	}

	@Override
	@Transactional
	public Client getClient(int theId) {
		
		return clientDAO.getClient(theId);
	}

	@Override
	@Transactional
	public void deleteClient(int theId) {

		clientDAO.deleteClient(theId);
	}

		// need to inject customer dao
		@Autowired
		private EmployeeDAO employeeDAO;

		@Override
		@Transactional
		public List<Employee> getEmployees() {
			return employeeDAO.getEmployees();
		}


		@Override
		@Transactional
		public void saveEmployee(Employee theEmployee) {

			employeeDAO.saveEmployee(theEmployee);
		}

		@Override
		@Transactional
		public Employee getEmployee(int theId) {

			return employeeDAO.getEmployee(theId);
		}

		@Override
		@Transactional
		public void deleteEmployee(int theId) {

			employeeDAO.deleteEmployee(theId);
		}

	@Autowired
	private ProductDAO productDAO;

	@Override
	@Transactional
	public List<Product> getProducts() {
		return productDAO.getProducts();
	}


	@Override
	@Transactional
	public void saveProduct(Product theProduct) {

		productDAO.saveProduct(theProduct);
	}

	@Override
	@Transactional
	public Product getProduct(int theId) {

		return productDAO.getProduct(theId);
	}

	@Override
	@Transactional
	public void deleteProduct(int theId) {

		productDAO.deleteProduct(theId);
	}

}






