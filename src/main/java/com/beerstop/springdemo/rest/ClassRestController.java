package com.beerstop.springdemo.rest;

import com.beerstop.springdemo.entity.Client;
import com.beerstop.springdemo.entity.Employee;
import com.beerstop.springdemo.entity.Product;
import com.beerstop.springdemo.service.ClientService;
import com.beerstop.springdemo.service.EmployeeService;
import com.beerstop.springdemo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ClassRestController {

    // autowire the CustomerService
    @Autowired
    private ClientService clientService;

    // add mapping for GET /customers
    @GetMapping("/clients")
    public List<Client> getClients(){
        return clientService.getClients();
    }

    // add mapping for GET /customers/{customerId}

    @GetMapping("/clients/{clientId}")
    public Client getClient (@PathVariable int clientId){
        Client theClient = clientService.getClient(clientId);

        if (theClient == null){
            throw new NotFoundException("Customer id not found - " + clientId);
        }

        return theClient;

    }

    // add mapping for POST /customers - add new customer

    @PostMapping("/clients")
    public Client addClient(@RequestBody Client theClient){

        // also just in case the pass an id in JSON ... set id to 0
        // this is force a save of new item ... instead of update

        theClient.setId(0);

        clientService.saveClient(theClient);

        return theClient;
    }

    // add mapping for PUT /customer - update existing customer

    @PutMapping ("/clients")
    public Client updateClient (@RequestBody Client theClient){

        clientService.saveClient(theClient);
        return theClient;
    }

    // add mapping for DELETE /customers/ {customerId} - delete customer
    @DeleteMapping("/clients/{clientId}")
    public String deleteClient(@PathVariable int clientId){

        Client tempClient = clientService.getClient(clientId);

        // throw exception if null

        if (tempClient == null){
            throw new NotFoundException("Client id not found - " + clientId);
        }

        clientService.deleteClient(clientId);

        return "Deleted client id - " + clientId;
    }

    @Autowired
    private EmployeeService employeeService;

    // add mapping for GET /customers
    @GetMapping("/employees")
    public List<Employee> getEmployees(){
        return employeeService.getEmployees();
    }

    // add mapping for GET /customers/{customerId}

    @GetMapping("/employees/{employeeId}")
    public Employee getEmployee (@PathVariable int employeeId){
        Employee theEmployee = employeeService.getEmployee(employeeId);

        if (theEmployee == null){
            throw new NotFoundException("Customer id not found - " + employeeId);
        }

        return theEmployee;

    }

    // add mapping for POST /customers - add new customer

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee theEmployee){

        // also just in case the pass an id in JSON ... set id to 0
        // this is force a save of new item ... instead of update

        theEmployee.setId(0);

        employeeService.saveEmployee(theEmployee);

        return theEmployee;
    }

    // add mapping for PUT /customer - update existing customer

    @PutMapping ("/employees")
    public Employee updateEmployee (@RequestBody Employee theEmployee){

        employeeService.saveEmployee(theEmployee);
        return theEmployee;
    }

    // add mapping for DELETE /customers/ {customerId} - delete customer
    @DeleteMapping("/employees/{employeeId}")
    public String deleteEmployee(@PathVariable int employeeId){

        Employee tempEmployee = employeeService.getEmployee(employeeId);

        // throw exception if null

        if (tempEmployee == null){
            throw new NotFoundException("Client id not found - " + employeeId);
        }

        employeeService.deleteEmployee(employeeId);

        return "Deleted client id - " + employeeId;
    }

    @Autowired
    private ProductService productService;

    // add mapping for GET /customers
    @GetMapping("/products")
    public List<Product> getProducts(){
        return productService.getProducts();
    }

    // add mapping for GET /customers/{customerId}

    @GetMapping("/products/{productId}")
    public Product getProduct (@PathVariable int productId){
        Product theProduct = productService.getProduct(productId);

        if (theProduct == null){
            throw new NotFoundException("Customer id not found - " + productId);
        }

        return theProduct;

    }

    // add mapping for POST /customers - add new customer

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product theProduct){

        // also just in case the pass an id in JSON ... set id to 0
        // this is force a save of new item ... instead of update

        theProduct.setId(0);

        productService.saveProduct(theProduct);

        return theProduct;
    }

    // add mapping for PUT /customer - update existing customer

    @PutMapping ("/products")
    public Product updateProduct (@RequestBody Product theProduct){

        productService.saveProduct(theProduct);
        return theProduct;
    }

    // add mapping for DELETE /customers/ {customerId} - delete customer
    @DeleteMapping("/products/{productId}")
    public String deleteProduct(@PathVariable int productId){

        Product tempProduct = productService.getProduct(productId);

        // throw exception if null

        if (tempProduct == null){
            throw new NotFoundException("Client id not found - " + productId);
        }

        productService.deleteProduct(productId);

        return "Deleted client id - " + productId;
    }

}
