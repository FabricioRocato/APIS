package com.beerstop.springdemo.movement.pedido;

import javax.persistence.*;

@Entity
public class movementStock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "funcionario")
    private String funcionario;

    @Column(name = "cliente")
    private String cliente;

    @Column(name = "produtos")
    private String produtos;

    @Column(name = "quantidade_produtos")
    private int quantidade_produtos;

    //produto

    //  preço
    // quantidade movimentada

    public movementStock(){

    }

    public movementStock(String funcionario, String cliente, String produtos, int quantidade_produtos) {
        this.funcionario = funcionario;
        this.cliente = cliente;
        this.produtos = produtos;
        this.quantidade_produtos = quantidade_produtos;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(String funcionario) {
        this.funcionario = funcionario;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getProdutos() {
        return produtos;
    }

    public void setProdutos(String produtos) {
        this.produtos = produtos;
    }

    public int getQuantidade_produtos() {
        return quantidade_produtos;
    }

    public void setQuantidade_produtos(int quantidade_produtos) {
        this.quantidade_produtos = quantidade_produtos;
    }

    @Override
    public String toString() {
        return "movementStock{" +
                "id=" + id +
                ", funcionario='" + funcionario + '\'' +
                ", cliente='" + cliente + '\'' +
                ", produtos='" + produtos + '\'' +
                ", quantidade_produtos=" + quantidade_produtos +
                '}';
    }
}
