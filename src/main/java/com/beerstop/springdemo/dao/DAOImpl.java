package com.beerstop.springdemo.dao;

import java.util.List;

import com.beerstop.springdemo.entity.Client;
import com.beerstop.springdemo.entity.Employee;
import com.beerstop.springdemo.entity.Product;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DAOImpl implements ClientDAO,EmployeeDAO,ProductDAO {

	// need to inject the session factory
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public List<Client> getClients() {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// create a query  ... sort by first name
		Query<Client> theQuery =
				currentSession.createQuery("from Client order by firstName",
						Client.class);

		// execute query and get result list
		List<Client> clients = theQuery.getResultList();

		// return the results		
		return clients;
	}

	@Override
	public void saveClient(Client theClient) {

		// get current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// save/update the customer ... finally LOL
		currentSession.saveOrUpdate(theClient);

	}

	@Override
	public Client getClient(int theId) {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// now retrieve/read from database using the primary key
		Client theClient = currentSession.get(Client.class, theId);

		return theClient;
	}


	@Override
	public void deleteClient(int theId) {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// delete object with primary key
		Query theQuery =
				currentSession.createQuery("delete from Client where id=:clientId");
		theQuery.setParameter("clientId", theId);

		theQuery.executeUpdate();
	}

		@Override
		public List<Employee> getEmployees() {

			// get the current hibernate session
			Session currentSession = sessionFactory.getCurrentSession();

			// create a query  ... sort by last name
			Query<Employee> theQuery =
					currentSession.createQuery("from Employee order by firstName",
							Employee.class);

			// execute query and get result list
			List<Employee> employees = theQuery.getResultList();

			// return the results
			return employees;
		}

		@Override
		public void saveEmployee(Employee theEmployee) {

			// get current hibernate session
			Session currentSession = sessionFactory.getCurrentSession();

			// save/update the customer ... finally LOL
			currentSession.saveOrUpdate(theEmployee);

		}

		@Override
		public Employee getEmployee(int theId) {

			// get the current hibernate session
			Session currentSession = sessionFactory.getCurrentSession();

			// now retrieve/read from database using the primary key
			Employee theEmployee = currentSession.get(Employee.class, theId);

			return theEmployee;
		}


		@Override
		public void deleteEmployee(int theId) {

			// get the current hibernate session
			Session currentSession = sessionFactory.getCurrentSession();

			// delete object with primary key
			Query theQuery =
					currentSession.createQuery("delete from Employee where id=:employeeId");
			theQuery.setParameter("employeeId", theId);

			theQuery.executeUpdate();
		}

	@Override
	public List<Product> getProducts() {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// create a query  ... sort by last name
		Query<Product> theQuery =
				currentSession.createQuery("from Product order by name",
						Product.class);

		// execute query and get result list
		List<Product> products = theQuery.getResultList();

		// return the results
		return products;
	}

	@Override
	public void saveProduct(Product theProduct) {

		// get current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// save/update the customer ... finally LOL
		currentSession.saveOrUpdate(theProduct);

	}

	@Override
	public Product getProduct(int theId) {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// now retrieve/read from database using the primary key
		Product theProduct = currentSession.get(Product.class, theId);

		return theProduct;
	}


	@Override
	public void deleteProduct(int theId) {

		// get the current hibernate session
		Session currentSession = sessionFactory.getCurrentSession();

		// delete object with primary key
		Query theQuery =
				currentSession.createQuery("delete from Product where id=:productId");
		theQuery.setParameter("productId", theId);

		theQuery.executeUpdate();
	}

	}












