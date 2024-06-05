package com.example.myledger.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class InvoiceDto {
//    private Integer invoice_id;
    private Integer user_id;
    private String address;
    private String filename;
    private byte[] content;
    private Date emitDate;

}
