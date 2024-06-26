package com.stockfish.stockfishserver.stock.controller;

import com.stockfish.stockfishserver.member.entity.Member;
import com.stockfish.stockfishserver.member.repository.MemberRepository;
import com.stockfish.stockfishserver.stock.dto.StockHoldResponseDto;
import com.stockfish.stockfishserver.stock.dto.StockOrderResponseDto;
import com.stockfish.stockfishserver.stock.entity.StockOrder;
import com.stockfish.stockfishserver.stock.mapper.StockMapper;
import com.stockfish.stockfishserver.stock.service.StockHoldService;
import com.stockfish.stockfishserver.stock.service.StockOrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/stock")
@RequiredArgsConstructor
public class StockOrderController {

    private final StockOrderService stockOrderService;
    private final StockMapper stockMapper;
    private final StockHoldService stockHoldService;
    private final MemberRepository memberRepository;

    // 보유 주식 정보들 반환하는 api
    @GetMapping("/stockholds/{memberId}")
    public ResponseEntity getStockHolds(@PathVariable("memberId") Long memberId, @RequestParam Long companyId) {

        List<StockHoldResponseDto> stockHoldResponseDtos = stockHoldService.findStockHolds(memberId, companyId);

        stockHoldResponseDtos = stockHoldService.setPercentage(stockHoldResponseDtos);


        return new ResponseEntity<>(stockHoldResponseDtos, HttpStatus.OK);

    }

    // 매수 api
    @PostMapping("/buy")
    public ResponseEntity buyStocks(@RequestParam(name = "companyId") long companyId,
                                    @RequestParam(name = "price") long price,
                                    @RequestParam(name = "stockCount") int stockCount,
                                    @RequestParam(name = "memberId") Long memberId) {
        Optional<Member> member = memberRepository.findByMemberId(memberId);
        StockOrder stockOrder = stockOrderService.buyStocks(member.get(), companyId, price, stockCount);
        StockOrderResponseDto stockOrderResponseDto = stockMapper.stockOrderToStockOrderResponseDto(stockOrder);

        return new ResponseEntity<>(stockOrderResponseDto, HttpStatus.CREATED);
    }

    // 매도 api
    @PostMapping("/sell")
    public ResponseEntity sellStocks(@RequestParam(name = "companyId") long companyId,
                                     @RequestParam(name = "price") long price,
                                     @RequestParam(name = "stockCount") int stockCount,
                                     @RequestParam(name = "memberId") Long memberId) {
        Optional<Member> member = memberRepository.findByMemberId(memberId);
        StockOrder stockOrder = stockOrderService.sellStocks(member.get(), companyId, price, stockCount);
        StockOrderResponseDto stockOrderResponseDto = stockMapper.stockOrderToStockOrderResponseDto(stockOrder);

        return new ResponseEntity<>(stockOrderResponseDto, HttpStatus.CREATED);
    }

}
//    @Operation(summary = "주식을 매수 한다", description = "회사 주식을 매수하는 api", tags = { "Stock" })
//    @ApiResponses({
//            @ApiResponse(responseCode = "200", description = "OK",
//                    content = @Content(schema = @Schema(implementation = StockOrderResponseDto.class))),
//            @ApiResponse(responseCode = "400", description = "BAD REQUEST"),
//            @ApiResponse(responseCode = "404", description = "NOT FOUND"),
//            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
//    })

// 매수 api
//    @PostMapping("/buy")
//    public ResponseEntity buyStocks(@RequestParam(name = "companyId") long companyId,
//                                    @RequestParam(name = "price") long price,
//                                    @RequestParam(name = "stockCount") int stockCount,
//                                     Member member) {
////                                    @AuthenticationPrincipal Member member) {
//        StockOrder stockOrder = stockOrderService.buyStocks(member, companyId, price, stockCount);
//        StockOrderResponseDto stockOrderResponseDto = stockMapper.stockOrderToStockOrderResponseDto(stockOrder);
//
//        return new ResponseEntity<>(stockOrderResponseDto, HttpStatus.CREATED);
//    }

//    @Operation(summary = "주식을 매도 한다", description = "회사 주식을 매도하는 api", tags = { "Stock" })
//    @ApiResponses({
//            @ApiResponse(responseCode = "200", description = "OK",
//                    content = @Content(schema = @Schema(implementation = StockOrderResponseDto.class))),
//            @ApiResponse(responseCode = "400", description = "BAD REQUEST"),
//            @ApiResponse(responseCode = "404", description = "NOT FOUND"),
//            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
//    })

// 매도 api
//    @PostMapping("/sell")
//    public ResponseEntity sellStocks(@RequestParam(name = "companyId") long companyId,
//                                     @RequestParam(name = "price") long price,
//                                     @RequestParam(name = "stockCount") int stockCount,
//                                     Member member) {
////                                     @AuthenticationPrincipal Member member) {
//        StockOrder stockOrder = stockOrderService.sellStocks(member, companyId, price, stockCount);
//        StockOrderResponseDto stockOrderResponseDto = stockMapper.stockOrderToStockOrderResponseDto(stockOrder);
//
//        return new ResponseEntity<>(stockOrderResponseDto, HttpStatus.CREATED);
//    }

//    @Operation(summary = "멤버의 stockHold를 반환한다", description = "멤버의 stockHold를 반환하는 api", tags = { "Stock" })
//    @ApiResponses({
//            @ApiResponse(responseCode = "200", description = "OK",
//                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = StockHoldResponseDto.class)))),
//            @ApiResponse(responseCode = "400", description = "BAD REQUEST"),
//            @ApiResponse(responseCode = "404", description = "NOT FOUND"),
//            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
//    })

//    // 보유 주식 정보들 반환하는 api
//    @GetMapping("/stockholds")
////    public ResponseEntity getStockHolds(@AuthenticationPrincipal Member member) {
//    public ResponseEntity getStockHolds( Member member) {
//        List<StockHoldResponseDto> stockHoldResponseDtos = stockHoldService.findStockHolds(member.getMemberId());
//        //vList<StockHoldResponseDto> stockHoldResponseDtos = companyMapper.stockHoldToStockHoldResponseDto(stockHoldList);
//        stockHoldResponseDtos = stockHoldService.setPercentage(stockHoldResponseDtos);
//
//        return new ResponseEntity<>(stockHoldResponseDtos, HttpStatus.OK);
//    }

//    @Operation(summary = "멤버의 stockOrder를 반환한다", description = "멤버의 stockOrder를 반환하는 api", tags = { "Stock" })
//    @ApiResponses({
//            @ApiResponse(responseCode = "200", description = "OK",
//                    content = @Content(array = @ArraySchema(schema = @Schema(implementation = StockOrderResponseDto.class)))),
//            @ApiResponse(responseCode = "400", description = "BAD REQUEST"),
//            @ApiResponse(responseCode = "404", description = "NOT FOUND"),
//            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
//    })

//    // 멤버의 stockOrder를 반환하는 api
//    @GetMapping("/stockorders")
////    public ResponseEntity getStockOrders(@AuthenticationPrincipal Member member) {
//    public ResponseEntity getStockOrders( Member member) {
//        List<StockOrderResponseDto> stockOrderResponseDtos = stockOrderService.getMemberStockOrders(member.getMemberId());
//
//        return new ResponseEntity<>(stockOrderResponseDtos, HttpStatus.OK);
//    }

//    @Operation(summary = "미체결된 매수, 매도 StockOrder 삭제", description = "미 체결된 매수, 매도 삭제하는 api", tags = { "Stock" })
//    @ApiResponses({
//            @ApiResponse(responseCode = "200", description = "OK"),
//            @ApiResponse(responseCode = "400", description = "BAD REQUEST"),
//            @ApiResponse(responseCode = "404", description = "NOT FOUND"),
//            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
//    })

// 미 체결된 매수, 매도 삭제하는 api
//    @DeleteMapping("/stockorders")
////    public void deleteStockOrders(@AuthenticationPrincipal Member member,
//    public void deleteStockOrders( Member member,
//                                  @RequestParam("stockOrderId") long stockOrderId,
//                                  @RequestParam("stockCount") int stockCount) {
//        stockOrderService.deleteStockOrder(member, stockOrderId, stockCount);
//    }

//    @Operation(summary = "예약 매도 매수 기능 실행", description = "30분 마다 실행되는 예약 매도 매수기능 실행하는 api", tags = { "Stock" })
//    @ApiResponses({
//            @ApiResponse(responseCode = "200", description = "OK"),
//            @ApiResponse(responseCode = "400", description = "BAD REQUEST"),
//            @ApiResponse(responseCode = "404", description = "NOT FOUND"),
//            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
//    })

//    @GetMapping("checkOrder")
//    public ResponseEntity checkOrder() {
//        stockOrderService.checkOrder();
//
//        return new ResponseEntity(HttpStatus.OK);
//    }