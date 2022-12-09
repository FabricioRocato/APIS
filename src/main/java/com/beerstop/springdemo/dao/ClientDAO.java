package com.beerstop.springdemo.dao;

import java.util.List;

import com.beerstop.springdemo.entity.Client;

public interface ClientDAO {

	public List<Client> getClients();

	public void saveClient(Client theClient);

	public Client getClient(int theId);

	public void deleteClient(int theId);
	
}
