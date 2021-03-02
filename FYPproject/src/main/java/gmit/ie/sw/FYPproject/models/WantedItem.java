package gmit.ie.sw.FYPproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "wanteditems")
public class WantedItem {
    @Id
    private String id;

    private String title;
    private String description;
    private boolean published;
    private String category;
    private String imageurl;
    private String location;





    public Tutorial() {

    }

    public Tutorial(String title, String description, boolean published, String category, String imageurl, String location) {
        this.title = title;
        this.description = description;
        this.published = published;
        this.category = category;
        this.imageurl = imageurl;
        this.location = location;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isPublished() {
        return published;
    }

    public void setPublished(boolean isPublished) {
        this.published = isPublished;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImageurl() {
        return imageurl;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "Tutorial [id=" + id + ", title=" + title + ", desc=" + description + ", published=" + published + ", category=" + category+ ", imagerurl=" + imageurl+ ", location=" + location+ "]";
    }
}