package com.Login.Oauth.Repo;

import com.Login.Oauth.Entity.Transactions;
import org.springframework.boot.autoconfigure.pulsar.PulsarProperties;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface TransactionRepo extends MongoRepository<Transactions,String>{
    @Query("{ '$or': [ " +
            "{ 'senderUserId': ?0, 'receiverUserId': ?1 }, " +
            "{ 'senderUserId': ?1, 'receiverUserId': ?0 } ] }")
    List<Transactions> findTransactionsBetweenUsers(String userA, String userB);
}
