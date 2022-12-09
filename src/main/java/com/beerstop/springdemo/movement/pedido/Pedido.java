package com.beerstop.springdemo.movement.pedido;


import javax.persistence.*;


@Entity
public class Pedido {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;




    // localidade /ponto de referencia string

    // funcionario
    // cliente

    // lista  movimentação de stock
}
