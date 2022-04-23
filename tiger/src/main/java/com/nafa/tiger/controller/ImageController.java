package com.nafa.tiger.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import java.lang.System;

import java.sql.*;

@RestController
public class ImageController{
    
	private static final String UPLOAD_DIRECTORY = "upload";
	private static final int THRESHOLD_SIZE     = 1024 * 1024 * 3;  // 3MB
	private static final int MAX_FILE_SIZE      = 1024 * 1024 * 40; // 40MB
	private static final int MAX_REQUEST_SIZE   = 1024 * 1024 * 50; // 50MB

	// couldn't figure out how to get a relative path working so this path will have to be changed based on local machine for the time being
	private static final String UPLOAD_PATH = "C:\\Users\\danie\\Desktop\\Files\\School Stuff\\Spring 2022\\Capstone Project\\Github\\project-tigers\\public" + File.separator + UPLOAD_DIRECTORY;


	protected class Image{
		public int id;
		public String name;

		public Image(){}
	}

 
    @CrossOrigin("*")
	@PostMapping("/uploadImage")
	public void uploadImage(MultipartHttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		if (!ServletFileUpload.isMultipartContent(request)) {
			PrintWriter writer = response.getWriter();
			writer.println("Request does not contain upload data");
			writer.flush();
			return;
		}

		// configures upload settings
		// DiskFileItemFactory factory = new DiskFileItemFactory();
		// factory.setSizeThreshold(THRESHOLD_SIZE);
		// factory.setRepository(new File(System.getProperty("java.io.tmpdir")));
 
		// ServletFileUpload upload = new ServletFileUpload(factory);
		// upload.setFileSizeMax(MAX_FILE_SIZE);
		// upload.setSizeMax(MAX_REQUEST_SIZE);

		// constructs the directory path to store upload file
		// String uploadPath = getServletContext().getRealPath("") + File.separator + UPLOAD_DIRECTORY;
		

		// creates the directory if it does not exist
		File uploadDir = new File(UPLOAD_PATH);
		if (!uploadDir.exists()) {
			uploadDir.mkdir();
		}


		try {
			MultipartFile file = request.getFile("image");
			String fileName = file.getOriginalFilename();
			String filePath = UPLOAD_PATH + File.separator + fileName;
			File storeFile = new File(filePath);
			file.transferTo(storeFile);

			System.out.println(fileName + " successfully uploaded");

			//add file name to database
			String query = "INSERT INTO images(name, used) VALUES('" + fileName  + "', FALSE)";

			try(Connection con = DriverManager.getConnection("jdbc:postgresql://nafa.cp4e12t7aiyi.us-east-2.rds.amazonaws.com/registration",
			"tiger", "nafatiger");) {
				PreparedStatement ps = con.prepareStatement(query);
				ps.executeUpdate();

				System.out.println(fileName + " successfully stored in database");
	
		 	} catch (SQLException e) {
				System.out.println("Error: " + e.getMessage());
		 	}

			request.setAttribute("message", "Upload has been done successfully!");
		} catch (Exception ex) {
            System.out.println("Error: " + ex.getMessage());
        }

	}


	@CrossOrigin("*")
	@GetMapping("/getAllImages/{condition}")
	public ArrayList<Image> getAllImages(@PathVariable("condition") String condition){

		
		String query = "SELECT * FROM images";
		if(condition.equals("carousel")){
			query = "SELECT * FROM images WHERE used=TRUE";
		}
		
		ArrayList<Image> images= new ArrayList<Image>();

		try(Connection con = DriverManager.getConnection("jdbc:postgresql://nafa.cp4e12t7aiyi.us-east-2.rds.amazonaws.com/registration",
		"tiger", "nafatiger"); 
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(query);
		) {
			while(rs.next()){
				Image i = new Image();
				i.id = rs.getInt("id");
				i.name = rs.getString("name");
				images.add(i);
			}
		}
		catch (SQLException e) {
			System.out.println("Error: " + e.getMessage());
		}

		return images;
	}


	@CrossOrigin("*")
	@PostMapping("removeImages/{image}")
	public void removeFromGroup(@PathVariable("image") String name){
		try(Connection con = DriverManager.getConnection("jdbc:postgresql://nafa.cp4e12t7aiyi.us-east-2.rds.amazonaws.com/registration",
		"tiger", "nafatiger");) {
			String query = "DELETE FROM images WHERE name = '" + name +"'";
			PreparedStatement ps = con.prepareStatement(query);
			ps.executeUpdate();

			String filePath = UPLOAD_PATH + File.separator + name;
			File file = new File(filePath);
			file.delete();

			System.out.println(name + " successfully removed");
		 } catch (SQLException e) {
			System.out.println("Error: " + e.getMessage());
		 }
	}


	@CrossOrigin("*")
	@PostMapping("/changeCarousel")
	public void changeCarousel(@RequestBody ArrayList<String> names){


		try(Connection con = DriverManager.getConnection("jdbc:postgresql://nafa.cp4e12t7aiyi.us-east-2.rds.amazonaws.com/registration",
		"tiger", "nafatiger");) {
			String removeFromCarousel = "UPDATE images SET used=FALSE WHERE used=TRUE";
			PreparedStatement ps = con.prepareStatement(removeFromCarousel);
			ps.executeUpdate();

			for(String name : names){
				String addToCarousel = "UPDATE images SET used=TRUE WHERE name='" + name + "'";
				ps = con.prepareStatement(addToCarousel);
				ps.executeUpdate();
			}

			System.out.println("change successful");
	
		} catch (SQLException e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

}
