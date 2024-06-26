package com.stockfish.stockfishserver.stock.dto;

import com.stockfish.stockfishserver.stock.entity.StockOrder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class StockOrderResponseDto {
    private long stockOrderId;

    private int stockCount;

    private long memberId;

    private long companyId;

    private StockOrder.OrderTypes OrderTypes;

    private StockOrder.OrderStates OrderStates;

    private long price;

    private LocalDateTime modifiedAt;
}
