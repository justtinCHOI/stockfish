package com.stockfish.stockfishserver.cash.mapper;

import com.stockfish.stockfishserver.cash.dto.CashResponseDto;
import com.stockfish.stockfishserver.cash.entity.Cash;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CashMapper {

//    Cash cashPostToCash(CashPostDto requestBody);
//
//    Cash cashPatchToCash(CashPatchDto requestBody);
    CashResponseDto cashToCashResponseDto(Cash cash);
}
