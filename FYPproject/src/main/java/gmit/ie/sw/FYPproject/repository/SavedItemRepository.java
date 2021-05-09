package gmit.ie.sw.FYPproject.repository;

import gmit.ie.sw.FYPproject.models.SavedItem;


import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SavedItemRepository extends MongoRepository<SavedItem, String> {
    //Lists
    List<SavedItem> findByTitleContaining(String title);
    List<SavedItem> findByPublished(boolean published);
}
