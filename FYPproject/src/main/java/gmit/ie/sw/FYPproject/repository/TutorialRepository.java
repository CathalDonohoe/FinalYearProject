package gmit.ie.sw.FYPproject.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import gmit.ie.sw.FYPproject.models.Tutorial;

public interface TutorialRepository extends MongoRepository<Tutorial, String> {
    //Lists
    List<Tutorial> findByTitleContaining(String title);
    List<Tutorial> findByPublished(boolean published);
}