package gmit.ie.sw.FYPproject.controllers;

import gmit.ie.sw.FYPproject.models.SavedItem;
import gmit.ie.sw.FYPproject.models.Tutorial;
import gmit.ie.sw.FYPproject.repository.SavedItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/test")

public class SavedItemController {

    //Instance
    @Autowired
    SavedItemRepository savedItemRepository;

    //get all saved items
    @GetMapping("/savedItems")
    public ResponseEntity<List<SavedItem>> getAllSavedItems(@RequestParam(required = false) String title) {
        try {
            List<SavedItem> savedItems = new ArrayList<SavedItem>();

            if (title == null)
                savedItemRepository.findAll().forEach(savedItems::add);
            else
                savedItemRepository.findByTitleContaining(title).forEach(savedItems::add);

            if (savedItems.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(savedItems, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //get specific item by id
    @GetMapping("/savedItems/{id}")
    public ResponseEntity<SavedItem> getSavedItemById(@PathVariable("id") String id) {
        Optional<SavedItem> savedItemData = savedItemRepository.findById(id);

        if (savedItemData.isPresent()) {
            return new ResponseEntity<>(savedItemData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    //create a new saved item
    @PostMapping("/savedItems")
    public ResponseEntity<SavedItem> createSavedItem(@RequestBody SavedItem savedItem) {
        try {
            SavedItem _savedItem = savedItemRepository.save(new SavedItem(savedItem.getId(), savedItem.getTitle(),  savedItem.getUsername(),false));
            return new ResponseEntity<>(_savedItem, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    //update an item by id
    @PutMapping("/savedItems/{id}")
    public ResponseEntity<SavedItem> updateSavedItem(@PathVariable("id") String id, @RequestBody SavedItem savedItem) {
        Optional<SavedItem> savedItemData = savedItemRepository.findById(id);

        if (savedItemData.isPresent()) {
            SavedItem _savedItem = savedItemData.get();
            _savedItem.setTitle(savedItem.getTitle());
            _savedItem.setUsername(savedItem.getUsername());
            _savedItem.setPublished(savedItem.isPublished());
            return new ResponseEntity<>(savedItemRepository.save(_savedItem), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    //delete specific saved item by id
    @DeleteMapping("/savedItems/{id}")
    public ResponseEntity<HttpStatus> deleteSavedItem(@PathVariable("id") String id) {
        try {
            savedItemRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    //delete all saved items
    @DeleteMapping("/savedItems")
    public ResponseEntity<HttpStatus> deleteAllSavedItems() {
        try {
            savedItemRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    //find items by published bool
    @GetMapping("/savedItems/published")
    public ResponseEntity<List<SavedItem>> findByPublished() {
        try {
            List<SavedItem> savedItems = savedItemRepository.findByPublished(true);

            if (savedItems.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(savedItems, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
