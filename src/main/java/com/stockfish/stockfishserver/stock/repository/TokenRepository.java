package com.stockfish.stockfishserver.stock.repository;

import com.stockfish.stockfishserver.stock.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<Token, Long> {
}
