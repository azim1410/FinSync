package com.Login.Oauth.Repo;

import com.Login.Oauth.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends MongoRepository<User,String> {
    public Optional<User> findByEmail(String email);
}
