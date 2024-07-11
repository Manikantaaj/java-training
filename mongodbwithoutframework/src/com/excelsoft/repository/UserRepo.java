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
        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase mongoDatabase = mongoClient.getDatabase("User");
            MongoCollection<Document> collection = mongoDatabase.getCollection("user");

            collection.insertOne(new Document()
                    .append("_id", new ObjectId())
                    .append("name", user.getName())
                    .append("email", user.getEmail())
                    .append("password", user.getPassword()));
            return "User data added";
        }catch (Exception ex){
            ex.printStackTrace();
            return "User data not added";
        }
    }

    public User getUserId(Integer id){
        String uri = "mongodb://localhost:27017/User";
        try(MongoClient mongoClient = MongoClients.create(uri)){
            MongoDatabase mongoDatabase = mongoClient.getDatabase("User");
            MongoCollection<Document> collection = mongoDatabase.getCollection("user");

            Document query = new Document("_id", new ObjectId(String.valueOf(id)));
            Document result = collection.find(query).first();

            if (result != null) {
                User user = new User();
               user.setId(result.getInteger("id"));
                user.setName(result.getString("name"));
                user.setEmail(result.getString("email"));
                user.setPassword(result.getString("password"));
                return user;
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        }
}
