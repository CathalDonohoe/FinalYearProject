package gmit.ie.sw.FYPproject.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import gmit.ie.sw.FYPproject.models.WantedItem;

public interface WantedItemRepository extends MongoRepository<WantedItem, String> {
    //Lists
    List<WantedItem> findByTitleContaining(String title);
    List<WantedItem> findByPublished(boolean published);
}