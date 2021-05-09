package gmit.ie.sw.FYPproject.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import gmit.ie.sw.FYPproject.models.ERole;
import gmit.ie.sw.FYPproject.models.Role;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends MongoRepository<Role, String> {
    //Lists
    Optional<Role> findByName(ERole name);
}