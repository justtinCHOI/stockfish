package com.stockfish.stockfishserver.service;

import com.stockfish.stockfishserver.stock.service.CompanyService;
import com.stockfish.stockfishserver.stock.service.StockMinService;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Log4j2
//@ActiveProfiles("test")
public class CompanyServiceTest {

    @Autowired
    CompanyService companyService;

    @Autowired
    StockMinService stockMinService;

//    @Test
//    @Transactional
//    public void testFillCompaines() throws InterruptedException {
//        companyService.fillCompaines();
//    }

    //build.gradle 할 때 실행 되므로 만료되지 않는 accessToken 을 계속 요청한다.
//    @Test
//    @Transactional
//    public void testUpdateStockMin() throws InterruptedException {
//        stockMinService.updateStockMin();
//    }

    @Test
    @Transactional
    public void testFindCompanies()  {
        companyService.findCompanies();
    }
//
//    @Test
//    public void testGet() {
//        Long companyId = 50L;
//        log.info(companyService.get(companyId));
//    }
//
//    @Test
//    public void testRegister() {
//        CompanyDTO companyDTO = CompanyDTO.builder()
//                .code("Code123")
//                .korName("Korean Name")
//                .created_at(LocalDate.of(2024, 5, 4))
//                .build();
//        log.info(companyService.register(companyDTO));
//    }
//
//    @Test
//    public void testGetList() {
//        PageRequestDTO pageRequestDTO = PageRequestDTO.builder().page(11).build();
//        log.info(companyService.getList(pageRequestDTO));
//    }
}
