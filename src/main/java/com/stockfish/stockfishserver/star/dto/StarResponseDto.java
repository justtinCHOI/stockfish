package com.stockfish.stockfishserver.star.dto;

import com.stockfish.stockfishserver.stock.dto.CompanyResponseDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StarResponseDto {
    private long starId;

    private long memberId;

    private CompanyResponseDto companyResponseDto;
}
