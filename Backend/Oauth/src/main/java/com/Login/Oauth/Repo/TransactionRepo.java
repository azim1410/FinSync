package com.Login.Oauth.Repo;

import com.Login.Oauth.Entity.Transactions;
import org.springframework.boot.autoconfigure.pulsar.PulsarProperties;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TransactionRepo extends MongoRepository<Transactions,String>{
}
