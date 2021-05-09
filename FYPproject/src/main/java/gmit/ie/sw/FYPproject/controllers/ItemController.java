package gmit.ie.sw.FYPproject.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gmit.ie.sw.FYPproject.models.Item;
import gmit.ie.sw.FYPproject.repository.ItemMongoRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ItemController {

    //instance
    @Autowired
    ItemMongoRepository itemRepository;

    //get all items
    @GetMapping("/items")
    public  List<Item> getAllItems(){
        System.out.println("Get all items");

        return itemRepository.findAll();
    }

    //create an item
    @PostMapping("/items/{id}")
    public Item createItem(@Valid @RequestBody Item item){
        System.out.println("Create Item: " + item.getName() + "...");

        return itemRepository.save(item);

    }

    //get item by id
    @GetMapping("/items/{id}")
    public ResponseEntity<Item> getItem(@PathVariable("id") String id){
        System.out.println("Update Item with ID = " + id + "...");;
        Optional<Item> itemData = itemRepository.findById(id);
        if(itemData.isPresent()) {
            return new ResponseEntity<>(itemData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //update an item by id
    @PutMapping("/items/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable("id") String id, @RequestBody Item item){
        System.out.println("Update Item with ID = " + id + "...");

        Optional<Item> itemData = itemRepository.findById(id);
        if ( itemData.isPresent()){
            Item savedItem = itemData.get();
            savedItem.setName(item.getName());
            savedItem.setOwner(item.getOwner());
            savedItem.setDescription(item.getDescription());

            Item updatedBook = itemRepository.save(savedItem);
            return new ResponseEntity<>(updatedBook, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    //delete item
    @DeleteMapping("/items/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable("id") String id) {
        System.out.println("Delete Item with ID = " + id + "...");

        try {
            itemRepository.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("Book has been deleted!", HttpStatus.OK);
    }

    //delete all items
    @DeleteMapping("/items/delete")
    public ResponseEntity<String> deleteAllItems() {
        System.out.println("Delete All Items...");

        try {
            itemRepository.deleteAll();
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("All Books have been deleted!", HttpStatus.OK);
    }


}
