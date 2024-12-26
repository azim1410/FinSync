package com.Login.Oauth.Repo;

import com.Login.Oauth.Entity.Group;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GroupRepo extends MongoRepository<Group,String> {
}
