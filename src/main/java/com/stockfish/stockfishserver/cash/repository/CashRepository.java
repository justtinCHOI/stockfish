package com.stockfish.stockfishserver.cash.repository;

import com.stockfish.stockfishserver.cash.entity.Cash;
import com.stockfish.stockfishserver.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CashRepository extends JpaRepository<Cash, Long> {

    List<Cash> findByMember(Member member);

    boolean existsByAccountNumber(String accountNumber);

    Cash findByCashId(Long cashId);
}
