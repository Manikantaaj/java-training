package com.excel.mongodbapplication.repository;

import com.excel.mongodbapplication.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepo extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}
