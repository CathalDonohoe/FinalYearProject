package gmit.ie.sw.FYPproject.payload.response;

public class MessageResponse {
    //declaration of variables
    private String message;

    //constructor
    public MessageResponse(String message) {
        this.message = message;
    }

    //getters and setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}