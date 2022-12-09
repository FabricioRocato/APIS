package com.beerstop.springdemo.dao;

import com.beerstop.springdemo.entity.Product;

import java.util.List;

public interface ProductDAO {

    public List<Product> getProducts();

    public void saveProduct(Product theProduct);

    public Product getProduct(int theId);

    public void deleteProduct(int theId);


}