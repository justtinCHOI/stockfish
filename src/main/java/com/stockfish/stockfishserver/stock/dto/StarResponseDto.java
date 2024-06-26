package com.stockfish.stockfishserver.stock.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StarResponseDto {
    private long starId;

    private long memberId;

    private CompanyResponseDto companyResponseDto;
}
