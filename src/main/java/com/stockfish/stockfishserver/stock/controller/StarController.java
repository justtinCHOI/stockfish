package com.stockfish.stockfishserver.stock.controller;

import com.stockfish.stockfishserver.member.entity.Member;
import com.stockfish.stockfishserver.stock.dto.StarResponseDto;
import com.stockfish.stockfishserver.stock.service.StarService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stars")
@RequiredArgsConstructor
public class StarController {
    private final StarService starService;

    @PostMapping
    public ResponseEntity setStar(@RequestParam long companyId,
                                  Member member) {
//                        @AuthenticationPrincipal Member member) {
        starService.saveStar(member, companyId);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping
//    public ResponseEntity getStarList(@AuthenticationPrincipal Member member) {
    public ResponseEntity getStarList( Member member) {
        List<StarResponseDto> starResponseDtos = starService.getStarResponseDtoList(member);

        return new ResponseEntity<>(starResponseDtos, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteStar(@RequestParam long companyId,
             Member member) {
//            @AuthenticationPrincipal Member member) {
        starService.deleteStar(member, companyId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
