package com.theironyard;

/**
 * Created by zach on 10/19/16.
 */
public class User {
    int id;
    String email;
    String password;

    public User() {
    }

    public User(int id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
