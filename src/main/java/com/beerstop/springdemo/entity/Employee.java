package com.beerstop.springdemo.entity;

import javax.persistence.*;

@Entity
@Table(name = "employee")
public class Employee {
    public Employee(){
    }

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="first_name")
    private String firstName;

    @Column(name = "cpf ")
    private String cpf;

    @Column(name = "cellphone")
    private String cellphone;

    @Column(name = "occupation")
    private String occupation;

    public Employee(String firstName, String cpf, String cellphone, String occupation) {
        this.firstName = firstName;
        this.cpf = cpf;
        this.cellphone = cellphone;
        this.occupation = occupation;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCellphone() {
        return cellphone;
    }

    public void setCellphone(String cellphone) {
        this.cellphone = cellphone;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", cpf='" + cpf + '\'' +
                ", cellphone='" + cellphone + '\'' +
                ", occupation='" + occupation + '\'' +
                '}';
    }
}
