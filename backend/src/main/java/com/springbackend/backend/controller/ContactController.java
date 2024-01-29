package com.springbackend.backend.controller;

import java.util.List; // Import java.util.List

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.springbackend.backend.exception.ContactNotFoundException;
import com.springbackend.backend.model.Contact;
import com.springbackend.backend.repo.ContactRepo;

@RestController
@CrossOrigin("http://localhost:3000")
public class ContactController {
    
    @Autowired
    private ContactRepo contactRepo;
    
    @PostMapping("/contact")
    Contact newContact(@RequestBody Contact newContact){
        return contactRepo.save(newContact);
    }
    
    @GetMapping("/contacts")
    List<Contact> getAllContacts(){
        return contactRepo.findAll();
    }
    
    @GetMapping("/contact/{id}")
    Contact getContactById(@PathVariable Long id){
        return contactRepo.findById(id)
                .orElseThrow(() -> new ContactNotFoundException(id));
    }

    @PutMapping("/contact/{id}")
    Contact updateContact(@RequestBody Contact newContact, @PathVariable Long id) {
        return contactRepo.findById(id)
                .map(contact -> {
                    
                    contact.setMission(newContact.getMission());
                    contact.setVision(newContact.getVision());
                    contact.setAboutUs(newContact.getAboutUs());
                    return contactRepo.save(contact);
                })
                .orElseThrow(() -> new ContactNotFoundException(id));
    }
}
