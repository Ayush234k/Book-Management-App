package com.example.bookManagementBackend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "books")
public class book {
    @Id
    public String bookId;
    public String bookName;
    public int bookPrice;
    public String bookDesc;
}
