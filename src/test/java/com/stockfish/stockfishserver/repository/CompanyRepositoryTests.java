package com.stockfish.stockfishserver.repository;

import com.stockfish.stockfishserver.stock.repository.CompanyRepository;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertNotNull;
@Disabled
@SpringBootTest
@Log4j2
//@ActiveProfiles("test")
public class CompanyRepositoryTests {

    @Autowired
    private CompanyRepository companyRepository;

//    @Test
//    public void test1() {
//        assertNotNull(companyRepository);
//        log.info(companyRepository.getClass().getName() + " mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
//    }

}
