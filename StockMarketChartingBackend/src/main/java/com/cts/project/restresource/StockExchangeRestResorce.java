package com.cts.project.restresource;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.cts.project.bean.StockExchange;

@RepositoryRestResource(path = "exchange", collectionResourceRel = "exchange")

public interface StockExchangeRestResorce extends PagingAndSortingRepository <StockExchange, Integer>  {

}
