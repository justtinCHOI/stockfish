package com.stockfish.stockfishserver.page.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder // 상속시에 필요
@AllArgsConstructor
@NoArgsConstructor
public class PageRequestDTO {
    //page 와 관련해서 범용적으로 사용할 수 있는 DTO
    //추가하고 싶으면 implements 해라.
    //Builder 의 기본
    @Builder.Default
    private int page = 1;

    @Builder.Default
    private int size = 10; //하나의 페이지에 몇개가 들어가는지
}
