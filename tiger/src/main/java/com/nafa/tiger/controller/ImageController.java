package com.nafa.tiger.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.service.GroupService;

import java.sql.*;

@RestController
public class ImageController {
    

    @CrossOrigin("*")
	@PostMapping("/uploadImage")
	public void uploadImage(Object image){
        String query = "INSERT INTO images(image) VALUES(" + image + ")";
        System.out.println(image);

		try(Connection con = DriverManager.getConnection("jdbc:postgresql://nafa.cp4e12t7aiyi.us-east-2.rds.amazonaws.com/registration", "tiger", "nafatiger");
        PreparedStatement ps = con.prepareStatement(query);){
			ps.executeUpdate();
	
		 } catch (SQLException e) {
			System.out.println("Error: " + e.getMessage());
		 }
	}

}
