package gmit.ie.sw.FYPproject.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import gmit.ie.sw.FYPproject.models.Item;


public interface ItemMongoRepository extends MongoRepository<Item, String>{
    //Lists
}
