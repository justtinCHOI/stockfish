package com.stockfish.stockfishserver.stock.controller;

import com.stockfish.stockfishserver.stock.dto.CompanyModifyDTO;
import com.stockfish.stockfishserver.stock.repository.CompanyRepository;
import com.stockfish.stockfishserver.stock.service.CompanyService;
import com.stockfish.stockfishserver.stock.dto.CompanyResponseDto;
import com.stockfish.stockfishserver.stock.dto.StockMinResponseDto;
import com.stockfish.stockfishserver.stock.entity.Company;
import com.stockfish.stockfishserver.stock.mapper.StockMapper;
import com.stockfish.stockfishserver.stock.service.StockMinService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@Slf4j
@AllArgsConstructor
//@Valid
@RequestMapping("/api/company")
public class CompanyController {

    private final CompanyService companyService;
    private final StockMapper stockMapper;
    private final CompanyRepository companyRepository;
    private StockMinService stockMinService;

    // 전체 회사 리스트
    @GetMapping("/list")
    public ResponseEntity<List<CompanyResponseDto>> getCompanyList() {

//        List<Company> companyList = companyService.findCompanies();
        List<Company> companyList = companyRepository.findAll();

        List<CompanyResponseDto> companyResponseDtoList = stockMapper.CompaniesToCompanyResponseDtos(companyList);

        return new ResponseEntity<>(companyResponseDtoList, HttpStatus.OK);
    }

    @GetMapping("/{companyId}")
    public ResponseEntity<CompanyResponseDto> getCompany(@PathVariable("companyId") Long companyId) {

        Company company = companyService.findCompanyById(companyId);

        CompanyResponseDto companyResponseDto = stockMapper.companyToCompanyResponseDto(company);

        return new ResponseEntity<>(companyResponseDto, HttpStatus.OK);
    }

    // 차트 하나 호출
    @GetMapping("/charts/{companyId}")
    public ResponseEntity getCompanyChart(@PathVariable("companyId") long companyId) {
        List<StockMinResponseDto> stockMinList = stockMinService.getRecent420StockMin(companyId);

        return new ResponseEntity(stockMinList, HttpStatus.OK);
    }
    //http://localhost:8080/stock/article/buy/1

    //회사 수정
    @PutMapping("/{companyId}")
    public Map<String, String> modify(@PathVariable("companyId") Long companyId,
                                      @RequestBody CompanyModifyDTO companyModifyDTO) {
        companyModifyDTO.setCompanyId(companyId);
        companyService.modify(companyModifyDTO);
        return Map.of("RESULT", "SUCCESS");
    }

}
//    private final CompanyService companyService;
//
//    @GetMapping("/{companyId}")
//    public CompanyDTO get(@PathVariable Long companyId) {
//        return companyService.get(companyId);
//    }
//
//    @GetMapping("/list")
//    public PageResponseDTO<CompanyDTO> list(PageRequestDTO pageRequestDTO) {
//        log.info("list..................." + pageRequestDTO);
//
//        return companyService.getList(pageRequestDTO);
//    }
//
//    @PostMapping("/")
//    public Map<String, Long> register(@RequestBody CompanyDTO dto) {
//        log.info("companyDTO: " + dto);
//
//        Long companyId = companyService.register(dto);
//
//        return Map.of("companyId", companyId);
//    }
//
//    @PutMapping("/{companyId}")
//    public Map<String, String> modify(@PathVariable("companyId") Long companyId,
//                                      @RequestBody CompanyDTO companyDTO) {
//        companyDTO.setCompanyId(companyId);
//
//        companyService.modify(companyDTO);
//        return Map.of("RESULT", "SUCCESS");
//    }
//
//    @DeleteMapping("/{companyId}")
//    public Map<String, String> remove(@PathVariable("companyId") Long companyId) {
//        companyService.remove(companyId);
//
//        return Map.of("RESULT", "SUCCESS");
//    }