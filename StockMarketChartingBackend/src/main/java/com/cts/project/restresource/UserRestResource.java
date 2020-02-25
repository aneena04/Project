package com.cts.project.restresource;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.cts.project.bean.User;

@RepositoryRestResource(path = "user", collectionResourceRel = "user")
public interface UserRestResource extends PagingAndSortingRepository<User, Integer> {
}
