package com.stockfish.stockfishserver.cash.mapper;

import com.stockfish.stockfishserver.cash.dto.CashResponseDto;
import com.stockfish.stockfishserver.cash.entity.Cash;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-22T17:32:18+0900",
    comments = "version: 1.5.5.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.7.jar, environment: Java 17.0.9 (Oracle Corporation)"
)
@Component
public class CashMapperImpl implements CashMapper {

    @Override
    public CashResponseDto cashToCashResponseDto(Cash cash) {
        if ( cash == null ) {
            return null;
        }

        CashResponseDto cashResponseDto = new CashResponseDto();

        if ( cash.getCashId() != null ) {
            cashResponseDto.setCashId( cash.getCashId() );
        }
        cashResponseDto.setAccountNumber( cash.getAccountNumber() );
        cashResponseDto.setMoney( cash.getMoney() );
        cashResponseDto.setDollar( cash.getDollar() );

        return cashResponseDto;
    }
}
