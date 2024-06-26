package com.stockfish.stockfishserver.member.service;

import org.springframework.transaction.annotation.Transactional;
import com.stockfish.stockfishserver.member.entity.Member;
import com.stockfish.stockfishserver.member.dto.MemberDTO;
import com.stockfish.stockfishserver.member.dto.MemberModifyDTO;

import java.util.stream.Collectors;

@Transactional
public interface MemberService {

    MemberDTO getKakaoMember(String accessToken);

    void modifyMember(MemberModifyDTO memberModifyDTO);

    MemberDTO entityToDTO(Member member);

    boolean checkEmail(String email);

}
