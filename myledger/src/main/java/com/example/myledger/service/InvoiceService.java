package com.example.myledger.service;

import com.example.myledger.model.User;
import com.example.myledger.repository.InvoiceRepository;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import com.example.myledger.model.Invoice;
import com.example.myledger.dto.InvoiceDto;
import com.example.myledger.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class InvoiceService {
    @Resource
    private final InvoiceRepository invoiceRepository;
    @Resource
    private final UserRepository userRepository;

    public InvoiceService(InvoiceRepository invoiceRepository, UserRepository userRepository) {
        this.invoiceRepository = invoiceRepository;
        this.userRepository = userRepository;
    }

    public List<InvoiceDto> getAllInvoices() {
        return invoiceRepository.findAll()
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public InvoiceDto createInvoice(InvoiceDto invoiceDto) {
        Invoice invoice = new Invoice();
        Optional<User> user = userRepository.findById(invoiceDto.getUser_id());
        invoice.setUser(user.get());
        invoice.setAddress(invoiceDto.getAddress());
        invoice.setContent(invoiceDto.getContent());
        invoice.setFilename(invoiceDto.getFilename());
        invoice.setEmitDate(invoiceDto.getEmitDate());
        invoiceRepository.save(invoice);
        return convertToDto(invoice);
    }

    private InvoiceDto convertToDto(Invoice invoice) {
        InvoiceDto dto = new InvoiceDto();
//        dto.setInvoice_id(invoice.getInvoice_id());
        dto.setUser_id(invoice.getUser().getUser_id());
        dto.setAddress(invoice.getAddress());
        dto.setContent(invoice.getContent());
        dto.setFilename(invoice.getFilename());
        dto.setEmitDate(invoice.getEmitDate());
        return dto;
    }

}
