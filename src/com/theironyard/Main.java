package com.theironyard;

import jodd.json.JsonParser;
import jodd.json.JsonSerializer;
import org.h2.tools.Server;
import spark.Session;
import spark.Spark;

import java.sql.*;
import java.util.ArrayList;

public class Main {
    public static void createTables(Connection conn) throws SQLException {
        Statement stmt = conn.createStatement();
        stmt.execute("CREATE TABLE IF NOT EXISTS users (id IDENTITY, name VARCHAR, password VARCHAR)");
        stmt.execute("CREATE TABLE IF NOT EXISTS cackles (id IDENTITY, cackler VARCHAR, cause VARCHAR, time VARCHAR, rating INT, user_id INT)");
    }

    public static void insertUser(Connection conn, String email, String password) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO users VALUES (NULL, ?, ?)");
        stmt.setString(1, email);
        stmt.setString(2, password);
        stmt.execute();
    }

    public static User selectUser(Connection conn, String email) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE name = ?");
        stmt.setString(1, email);
        ResultSet results = stmt.executeQuery();
        if (results.next()) {
            int id = results.getInt("id");
            String password = results.getString("password");
            return new User(id, email, password);
        }
        return null;
    }

    public static void insertCackle(Connection conn, Cackle cackle, int userId) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO cackles VALUES (NULL, ?, ?, ?, ?, ?)");
        stmt.setString(1, cackle.cackler);
        stmt.setString(2, cackle.cause);
        stmt.setString(3, cackle.time);
        stmt.setInt(4, cackle.rating);
        stmt.setInt(5, userId);
        stmt.execute();
    }

    public static ArrayList<Cackle> selectCackles(Connection conn) throws SQLException {
        ArrayList<Cackle> cackles = new ArrayList<>();
        PreparedStatement stmt = conn.prepareStatement("SELECT * FROM cackles");
        ResultSet results = stmt.executeQuery();
        while (results.next()) {
            int id = results.getInt("id");
            String cackler = results.getString("cackler");
            String cause = results.getString("cause");
            String time = results.getString("time");
            int rating = results.getInt("rating");
            cackles.add(new Cackle(id, cackler, cause, time, rating));
        }
        return cackles;
    }

    public static void main(String[] args) throws SQLException {
        Server.createWebServer().start();
        Connection conn = DriverManager.getConnection("jdbc:h2:./main");
        createTables(conn);
        Spark.externalStaticFileLocation("public");
        Spark.init();

        Spark.post(
                "/login",
                (request, response) -> {
                    String body = request.body();
                    JsonParser parser = new JsonParser();
                    User user = parser.parse(body, User.class);
                    User userFromDb = selectUser(conn, user.email);
                    if (userFromDb == null) {
                        insertUser(conn, user.email, user.password);
                    }
                    else if (!user.password.equals(userFromDb.password)) {
                        Spark.halt(403);
                        return "";
                    }
                    Session session = request.session();
                    session.attribute("email", user.email);
                    return "";
                }
        );

        Spark.get(
                "/user",
                (request, response) -> {
                    Session session = request.session();
                    String email = session.attribute("email");
                    if (email != null) {
                        User user = selectUser(conn, email);
                        JsonSerializer serializer = new JsonSerializer();
                        return serializer.serialize(user);
                    }
                    return "";
                }
        );

        Spark.post(
                "/add-cackle",
                (request, response) -> {
                    //Session session = request.session();
                    //String email = session.attribute("email");
                    //User user = selectUser(conn, email);
                    String body = request.body();
                    JsonParser parser = new JsonParser();
                    Cackle cackle = parser.parse(body, Cackle.class);
                    insertCackle(conn, cackle, 0);
                    return "";
                }
        );

        Spark.get(
                "/cackles",
                (request, response) -> {
                    JsonSerializer serializer = new JsonSerializer();
                    return serializer.serialize(selectCackles(conn));
                }
        );
    }
}
