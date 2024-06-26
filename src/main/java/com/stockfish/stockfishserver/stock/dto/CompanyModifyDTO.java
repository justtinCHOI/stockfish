package com.stockfish.stockfishserver.stock.dto;

import com.stockfish.stockfishserver.audit.Auditable;
import com.stockfish.stockfishserver.stock.entity.StockAsBi;
import com.stockfish.stockfishserver.stock.entity.StockInf;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CompanyModifyDTO extends Auditable {
    private long companyId;

    private String code;

    private String korName;

    private StockAsBi stockAsBi;

    private StockInf stockInf;
}
