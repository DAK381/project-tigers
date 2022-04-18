package com.nafa.tiger.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
		String uploadPath = "C:\\Users\\danie\\Desktop\\Files\\School Stuff\\Spring 2022\\Capstone Project\\PictureUploads" + File.separator + UPLOAD_DIRECTORY;

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

			request.setAttribute("message", "Upload has been done successfully!");
		} catch (Exception ex) {
            request.setAttribute("message", "There was an error: " + ex.getMessage());
        }

	}

}
