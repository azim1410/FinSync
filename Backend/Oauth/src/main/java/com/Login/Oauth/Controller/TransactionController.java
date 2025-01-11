package com.Login.Oauth.Controller;

import com.Login.Oauth.Entity.Transactions;
import com.Login.Oauth.Repo.TransactionRepo;
import com.Login.Oauth.Service.TransactionsService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Data
@AllArgsConstructor
@CrossOrigin
@RequestMapping("/transactions")
public class TransactionController {
    private TransactionsService transactionsService;

    @GetMapping("/{user1}/with/{user2}")
    public List<Transactions> getAllTransactions(@PathVariable String user1,@PathVariable String user2,@RequestParam String Token){
        return transactionsService.getAllTransactionsFrom(user1,user2,Token);
    }
}
