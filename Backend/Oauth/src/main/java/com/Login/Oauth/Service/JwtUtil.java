package com.Login.Oauth.Service;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtUtil {
    private static final String SECRET_KEY = "FinSyncAMoneyManagmentAppByHuzairAzimSamad23122024";

    // Generate JWT
    public static String generateToken(String username,String email) {
        Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

        return Jwts.builder()
                .setSubject(username)// Set username as subject
                .setSubject(email)
                .setIssuedAt(new Date()) // Set issue time
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour validity
                .signWith(key, SignatureAlgorithm.HS256) // Sign with key and algorithm
                .compact();
    }

    // Validate JWT
    public static Claims validateToken(String token) {
        Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody(); // Return claims if the token is valid
    }
}
