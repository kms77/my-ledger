package com.example.myledger.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

import com.example.myledger.dto.InvoiceDto;
import com.example.myledger.service.InvoiceService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
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

    //Marea batalie cu backendul, Ati -2024, 5 iunie, 10 erori omorate
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<InvoiceDto> createInvoice(@RequestPart("invoice") String invoiceStr, @RequestPart("file") MultipartFile file){
        // Convert MultipartFile to byte array and set it to invoiceDto
        try {
            ObjectMapper mapper = new ObjectMapper();
            InvoiceDto invoiceDto = mapper.readValue(invoiceStr, InvoiceDto.class);
            invoiceDto.setContent(file.getBytes());
            return ResponseEntity.ok(invoiceService.createInvoice(invoiceDto));
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
