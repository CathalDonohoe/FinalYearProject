package gmit.ie.sw.FYPproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection  = "items")
public class Item {

    //Declaration of variables
    @Id
    private String id;

    private String name;
    private String type;
    private String description;
    private String owner;


    public Item(){

    }

    //getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }


    //toString method
    @Override
    public String toString() {
        return "Item [id=" + id + ", name=" + name + ", description=" + description + ", owner=" + owner + "]";
    }
}
