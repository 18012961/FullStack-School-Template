package com.springbackend.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springbackend.backend.model.Contact;

public interface ContactRepo extends JpaRepository<Contact, Long> {
    
}
