package com.nafa.tiger.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import java.lang.System;

import java.sql.*;

@RestController
public class ImageController extends HttpServlet{
    
	private static final String UPLOAD_DIRECTORY = "upload";
	private static final int THRESHOLD_SIZE     = 1024 * 1024 * 3;  // 3MB
	private static final int MAX_FILE_SIZE      = 1024 * 1024 * 40; // 40MB
	private static final int MAX_REQUEST_SIZE   = 1024 * 1024 * 50; // 50MB

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
		DiskFileItemFactory factory = new DiskFileItemFactory();
		factory.setSizeThreshold(THRESHOLD_SIZE);
		factory.setRepository(new File(System.getProperty("java.io.tmpdir")));
 
		ServletFileUpload upload = new ServletFileUpload(factory);
		upload.setFileSizeMax(MAX_FILE_SIZE);
		upload.setSizeMax(MAX_REQUEST_SIZE);

		// constructs the directory path to store upload file
		// String uploadPath = getServletContext().getRealPath("") + File.separator + UPLOAD_DIRECTORY;

		// couldn't figure out how to get a relative path working so this path will have to be changed based on local machine for the time being
		String uploadPath = "C:\\Users\\danie\\Desktop\\Files\\School Stuff\\Spring 2022\\Capstone Project\\4.14\\project-tigers-main\\public" + File.separator + UPLOAD_DIRECTORY;

		// creates the directory if it does not exist
		File uploadDir = new File(uploadPath);
		if (!uploadDir.exists()) {
			uploadDir.mkdir();
		}


		try {
			MultipartFile file = request.getFile("image");
			String fileName = file.getOriginalFilename();
			String filePath = uploadPath + File.separator + fileName;
			File storeFile = new File(filePath);
			file.transferTo(storeFile);

			//add file name to database
			String query = "INSERT INTO images(name) VALUES('" + fileName  + "')";

			try(Connection con = DriverManager.getConnection("jdbc:postgresql://nafa.cp4e12t7aiyi.us-east-2.rds.amazonaws.com/registration",
			"tiger", "nafatiger");) {
				PreparedStatement ps = con.prepareStatement(query);
				ps.executeUpdate();
	
		 	} catch (SQLException e) {
				System.out.println("Error: " + e.getMessage());
		 	}

			request.setAttribute("message", "Upload has been done successfully!");
		} catch (Exception ex) {
            request.setAttribute("message", "There was an error: " + ex.getMessage());
        }

	}


	@CrossOrigin("*")
	@GetMapping("/getAllImages")
	public ArrayList<Image> getAllImages(){

		String query = "SELECT * FROM images";
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

}
