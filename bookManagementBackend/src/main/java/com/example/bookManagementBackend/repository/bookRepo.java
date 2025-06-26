package com.example.bookManagementBackend.repository;
import com.example.bookManagementBackend.models.book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface bookRepo extends MongoRepository<book, String> {  // Change JpaRepository(SQL) to MongoRepository(NoSQL)

}
