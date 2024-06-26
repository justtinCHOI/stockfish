package com.stockfish.stockfishserver.member.mapper;

import com.stockfish.stockfishserver.cash.entity.Cash;
import com.stockfish.stockfishserver.member.dto.MemberResponseDto;
import com.stockfish.stockfishserver.member.entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-06-18T16:30:21+0900",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.38.0.v20240524-2033, environment: Java 17.0.11 (Eclipse Adoptium)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public MemberResponseDto memberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberResponseDto memberResponseDto = new MemberResponseDto();

        Long cashId = memberCashCashId( member );
        if ( cashId != null ) {
            memberResponseDto.setCash( String.valueOf( cashId ) );
        }
        memberResponseDto.setCreatedAt( member.getCreatedAt() );
        memberResponseDto.setEmail( member.getEmail() );
        memberResponseDto.setMemberId( member.getMemberId() );
        memberResponseDto.setName( member.getName() );

        return memberResponseDto;
    }

    private Long memberCashCashId(Member member) {
        if ( member == null ) {
            return null;
        }
        Cash cash = member.getCash();
        if ( cash == null ) {
            return null;
        }
        long cashId = cash.getCashId();
        return cashId;
    }
}
