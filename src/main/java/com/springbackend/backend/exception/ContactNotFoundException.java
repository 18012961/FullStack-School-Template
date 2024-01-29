package com.springbackend.backend.exception;
public class ContactNotFoundException extends RuntimeException{
public ContactNotFoundException(Long id) {
super("Could not find the user by id: " + id);
}
}
