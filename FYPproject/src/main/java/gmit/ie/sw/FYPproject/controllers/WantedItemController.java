package gmit.ie.sw.FYPproject.controllers;

import gmit.ie.sw.FYPproject.models.WantedItem;
import gmit.ie.sw.FYPproject.repository.WantedItemRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/test")
public class WantedItemController {

    //Instance
    @Autowired
    WantedItemRepository wantedItemRepository;

    //call to get all wanted items
    @GetMapping("/wanted")
    public ResponseEntity<List<WantedItem>> getAllWantedItem(@RequestParam(required = false) String title) {
        try {
            List<WantedItem> WantedItems = new ArrayList<WantedItem>();

            if (title == null)
                wantedItemRepository.findAll().forEach(WantedItems::add);
            else
                wantedItemRepository.findByTitleContaining(title).forEach(WantedItems::add);

            if (WantedItems.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(WantedItems, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //get specific wanted item by id
    @GetMapping("/wanted/{id}")
    public ResponseEntity<WantedItem> getWantedItemById(@PathVariable("id") String id) {
        Optional<WantedItem> WantedItemData = wantedItemRepository.findById(id);

        if (WantedItemData.isPresent()) {
            return new ResponseEntity<>(WantedItemData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    //to create a new wanted item
    @PostMapping("/wanted")
    public ResponseEntity<WantedItem> createWantedItem(@RequestBody WantedItem wantedItem) {
        try {
            WantedItem _wantedItem = wantedItemRepository.save(new WantedItem(wantedItem.getTitle(), wantedItem.getDescription(), false, wantedItem.getCategory(), wantedItem.getUsername(), wantedItem.getEmail(), wantedItem.getImageurl(), wantedItem.getLocation()));
            return new ResponseEntity<>(_wantedItem, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    //update a wanted item by id
    @PutMapping("/wanted/{id}")
    public ResponseEntity<WantedItem> updateWantedItem(@PathVariable("id") String id, @RequestBody WantedItem wantedItem) {
        Optional<WantedItem> wantedItemData = wantedItemRepository.findById(id);

        if (wantedItemData.isPresent()) {
            WantedItem _wantedItem = wantedItemData.get();
            _wantedItem.setTitle(wantedItem.getTitle());
            _wantedItem.setDescription(wantedItem.getDescription());
            _wantedItem.setPublished(wantedItem.isPublished());
            _wantedItem.setCategory(wantedItem.getCategory());
            _wantedItem.setUsername(wantedItem.getUsername());
            _wantedItem.setEmail(wantedItem.getEmail());
            _wantedItem.setImageurl(wantedItem.getImageurl());
            _wantedItem.setLocation(wantedItem.getLocation());
            return new ResponseEntity<>(wantedItemRepository.save(_wantedItem), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    //delete wanted item by id
    @DeleteMapping("/wanted/{id}")
    public ResponseEntity<HttpStatus> deleteWantedItem(@PathVariable("id") String id) {
        try {
            wantedItemRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    //delete all wanted items
    @DeleteMapping("/wanted")
    public ResponseEntity<HttpStatus> deleteAllWantedItems() {
        try {
            wantedItemRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    //find item by published bool
    @GetMapping("/wanted/published")
    public ResponseEntity<List<WantedItem>> findByPublished() {
        try {
            List<WantedItem> wantedItems = wantedItemRepository.findByPublished(true);

            if (wantedItems.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(wantedItems, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}