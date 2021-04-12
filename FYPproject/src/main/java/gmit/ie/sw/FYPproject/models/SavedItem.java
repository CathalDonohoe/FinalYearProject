package gmit.ie.sw.FYPproject.models;

public class SavedItem {
    private String id;
    private String title;
    private String username;
    private boolean published;

    public SavedItem(){

    }

    public SavedItem(String id,String title, String username, boolean published){
        this.id = id;
        this.title=title;
        this.username = username;
        this.published = published;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean isPublished() {
        return published;
    }

    public void setPublished(boolean isPublished) {
        this.published = isPublished;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Tutorial [id=" + id + ", title=" + title + ", published=" + published + ", username=" + username+ "]";
    }

}
