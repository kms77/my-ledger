package com.example.myledger.repository;

import com.example.myledger.dto.InvoiceDto;
import com.example.myledger.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
    @Query("SELECT i FROM Invoice i WHERE i.user.user_id = ?1")
    List<Invoice> getInvoicesByUserId(Integer userId);



}
