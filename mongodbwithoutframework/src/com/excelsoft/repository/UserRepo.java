package com.excelsoft.repository;

import com.excelsoft.model.User;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.types.ObjectId;

public class UserRepo {
    public String saveUser(User user) {
        String uri = "mongodb://localhost:27017/User";
        MongoClient mongoClient = MongoClients.create(uri);
        MongoDatabase mongoDatabase = mongoClient.getDatabase("User");
            MongoCollection<Document> collection = mongoDatabase.getCollection("user");

            collection.insertOne(new Document()
                    .append("_id", new ObjectId())
                    .append("name", user.getName())
                    .append("email", user.getEmail())
                    .append("password", user.getPassword())
            );
            return "User data added";
    }
}
