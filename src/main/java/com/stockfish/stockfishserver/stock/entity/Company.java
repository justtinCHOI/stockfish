package com.stockfish.stockfishserver.stock.entity;

import com.stockfish.stockfishserver.audit.Auditable;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class Company extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long companyId;

    @Column
    private String code;

    @Column
    private String korName;

    @OneToOne(mappedBy = "company", cascade = CascadeType.ALL)
    private StockAsBi stockAsBi;

    @OneToOne(mappedBy = "company", cascade = CascadeType.ALL)
    private StockInf stockInf;

}
