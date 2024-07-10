package com.excelsoft.repository;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.types.ObjectId;

public class UserRepo {
    public static void main(String[] args) {

        String uri = "mongodb://localhost:27017/User";

        MongoDatabase mongoDatabase = null;
        try (MongoClient mongoClient = MongoClients.create(uri)) {
            mongoDatabase = mongoClient.getDatabase("User");
            MongoCollection<Document> collection = mongoDatabase.getCollection("user");

            collection.insertOne(new Document()
                    .append("_id", new ObjectId())
                    .append("name", "Dhanush")
                    .append("email", "dhanush@gmail.com")
                    .append("password", "Dhanu@123")

            );
            System.out.println("User data inserted");
        } catch (Exception ex) {
            System.out.println("User data not inserted");
        }
    }
}
