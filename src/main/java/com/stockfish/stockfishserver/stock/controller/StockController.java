package com.stockfish.stockfishserver.stock.controller;


import com.stockfish.stockfishserver.stock.service.ApiCallService;
//import io.swagger.v3.oas.annotations.Operation;
//import io.swagger.v3.oas.annotations.media.ArraySchema;
//import io.swagger.v3.oas.annotations.media.Content;
//import io.swagger.v3.oas.annotations.media.Schema;
//import io.swagger.v3.oas.annotations.responses.ApiResponse;
//import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class StockController {

    private final ApiCallService apiCallService;

//    @Operation(summary = "코스피 월봉 정보 가져오기", description = "월 초부터 현재 달까지의 월 코스피 정보를 불러옵니다.", tags = { "Stock" })
//    @ApiResponses({
//            @ApiResponse(responseCode = "200", description = "OK",
//                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = String.class)))),
//            @ApiResponse(responseCode = "400", description = "BAD REQUEST"),
//            @ApiResponse(responseCode = "404", description = "NOT FOUND"),
//            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
//    })
    @GetMapping("/api/kospi")
    public ResponseEntity getKospiMonth() {
        String kospi = apiCallService.getKospiMonthFromApi();
        return ResponseEntity.ok(kospi);
    }


}

