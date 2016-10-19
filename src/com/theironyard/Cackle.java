package com.theironyard;

/**
 * Created by zach on 10/19/16.
 */
public class Cackle {
    int id;
    String cackler;
    String cause;
    String time;
    int rating;

    public Cackle() {
    }

    public Cackle(int id, String cackler, String cause, String time, int rating) {
        this.id = id;
        this.cackler = cackler;
        this.cause = cause;
        this.time = time;
        this.rating = rating;
    }

    public int getId() {
        return id;
    }

    public String getCackler() {
        return cackler;
    }

    public String getCause() {
        return cause;
    }

    public String getTime() {
        return time;
    }

    public int getRating() {
        return rating;
    }
}
