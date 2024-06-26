package com.stockfish.stockfishserver.cash.mapper;

import com.stockfish.stockfishserver.cash.dto.CashResponseDto;
import com.stockfish.stockfishserver.cash.entity.Cash;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-06-18T16:30:21+0900",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.38.0.v20240524-2033, environment: Java 17.0.11 (Eclipse Adoptium)"
)
@Component
public class CashMapperImpl implements CashMapper {

    @Override
    public CashResponseDto cashToCashResponseDto(Cash cash) {
        if ( cash == null ) {
            return null;
        }

        CashResponseDto cashResponseDto = new CashResponseDto();

        cashResponseDto.setCashId( cash.getCashId() );
        cashResponseDto.setCreatedAt( cash.getCreatedAt() );
        cashResponseDto.setDoller( cash.getDoller() );
        cashResponseDto.setMember( cash.getMember() );
        cashResponseDto.setModifiedAt( cash.getModifiedAt() );
        cashResponseDto.setMoney( cash.getMoney() );

        return cashResponseDto;
    }
}
