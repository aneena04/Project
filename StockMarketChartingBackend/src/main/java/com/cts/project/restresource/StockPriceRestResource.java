package com.cts.project.restresource;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.cts.project.bean.StockPrice;


@RepositoryRestResource(path = "stockprice", collectionResourceRel = "stockprice")

public interface StockPriceRestResource extends PagingAndSortingRepository <StockPrice, Integer>

 {

}
