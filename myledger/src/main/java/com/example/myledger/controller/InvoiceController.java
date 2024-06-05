package com.example.myledger.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.example.myledger.dto.InvoiceDto;
import com.example.myledger.service.InvoiceService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/invoice")
public class InvoiceController {

        private final InvoiceService invoiceService;

        public InvoiceController(InvoiceService invoiceService) {
            this.invoiceService = invoiceService;
        }

        @GetMapping
        public ResponseEntity<List<InvoiceDto>> getAllInvoices() {
            return ResponseEntity.ok(invoiceService.getAllInvoices());
        }

        @PostMapping
        public ResponseEntity<InvoiceDto> createInvoice(@RequestBody InvoiceDto invoiceDto) {
            return ResponseEntity.ok(invoiceService.createInvoice(invoiceDto));
        }
        // Add other endpoints as needed
}
