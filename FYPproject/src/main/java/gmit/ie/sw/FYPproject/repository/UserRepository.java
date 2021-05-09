package gmit.ie.sw.FYPproject.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import gmit.ie.sw.FYPproject.models.User;

public interface UserRepository extends MongoRepository<User, String> {
    //Lists
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}