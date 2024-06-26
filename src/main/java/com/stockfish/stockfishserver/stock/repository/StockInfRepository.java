package com.stockfish.stockfishserver.stock.repository;

import com.stockfish.stockfishserver.stock.entity.StockInf;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockInfRepository extends JpaRepository<StockInf, Long> {
}
