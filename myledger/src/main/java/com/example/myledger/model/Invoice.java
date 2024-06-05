package com.example.myledger.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;
import static jakarta.persistence.GenerationType.AUTO;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "invoice")
public class Invoice {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Integer invoice_id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @Column(name = "address")
    private String address;
    @Column(name = "filename")
    private String filename;
    @Lob
    @Column(name = "content", columnDefinition = "MEDIUMBLOB")
    private byte[] content;
    @Column(name = "emitDate")
    private Date emitDate;


}
