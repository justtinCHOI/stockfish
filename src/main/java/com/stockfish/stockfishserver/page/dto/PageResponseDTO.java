package com.stockfish.stockfishserver.page.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
@Data
public class PageResponseDTO<E> {//DTO E 대신 쓰는 것이 났긴하다.

    private List<E> dtoList; // 현재 페이지의 DTO 들

    //collection 에는 기본 자료형이 안들어간다.
    private List<Integer> pageNumList; // start 부터 end 까지 숫자들

    private PageRequestDTO pageRequestDTO; // page, size

    private boolean prev, next; // 앞뒤 화살표가 있는지 ?

    private int totalCount, prevPage, nextPage, totalPage, current;

    @Builder(builderMethodName = "withAll")
    public PageResponseDTO(List<E> dtoList, PageRequestDTO pageRequestDTO, long total){
        //total -> 총 dto 개수,
        //각 페이지당 한 화면에 표시할 페이지 개수 = 10(임의 설정),
        //pageRequestDTO -> 각 페이지당 몇 개의 dto, 현재 페이지,
        //dtoList -> 현재 페이지의 dto 들(DB 에서 뽑아옴)
        //만 알면 모든 화면 구성을 할 수 있다.
        this.dtoList = dtoList;
        this.pageRequestDTO = pageRequestDTO;
        this.totalCount = (int)total;

        //pageRequestDTO.getPage() : 현 페이지 번호
        //pageRequestDTO.getSize() : 페이지당 들어가는 물품의 개수
        //totalCount : 총 물품의 개수
        //end : 페이지 리스트의 마지막 페이지번호
        //start : 페이지 리스트의 첫번쨰 페이지번호
        //last : 마지막 페이지 번호
        //total : 총 dto 개수
        //설정 ; totalPage : 페이지 표시 개수 = 10

        int end = (int)(Math.ceil(pageRequestDTO.getPage() /  10.0)) * 10;

        int start = end - 9;

        int last = (int)(Math.ceil( totalCount /  (double)pageRequestDTO.getSize()));

        end = Math.min(end, last);

        this.prev = start > 1;

        this.next = end < last;

        //IntStream: 숫자 binding
        //boxed : Integer 형으로 변환
        //collect : collation 으로 묶기
        this.pageNumList =  IntStream.rangeClosed(start, end).boxed().collect(Collectors.toList());

        this.prevPage = prev ? start - 1 : 0;

        this.nextPage = next ? end + 1 : 0;

        this.totalPage = this.pageNumList.size();

        this.current = pageRequestDTO.getPage();
    }
}
