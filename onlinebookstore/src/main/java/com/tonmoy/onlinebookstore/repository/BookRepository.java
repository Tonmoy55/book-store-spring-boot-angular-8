package com.tonmoy.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tonmoy.onlinebookstore.model.Book;

public interface BookRepository extends JpaRepository<Book,Long>{

}
