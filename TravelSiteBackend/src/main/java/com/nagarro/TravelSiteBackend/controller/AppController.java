package com.nagarro.TravelSiteBackend.controller;
import java.io.IOException;
import java.security.Principal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.nagarro.TravelSiteBackend.dto.MailResponse;
import com.nagarro.TravelSiteBackend.entity.AdminResponseEntity;
import com.nagarro.TravelSiteBackend.entity.TicketEntity;
import com.nagarro.TravelSiteBackend.model.TicketModel;
import com.nagarro.TravelSiteBackend.model.UserModel;
import com.nagarro.TravelSiteBackend.service.AdminService;
import com.nagarro.TravelSiteBackend.service.BasicServices;
import com.nagarro.TravelSiteBackend.service.FileOperationServices;
import com.nagarro.TravelSiteBackend.service.TicketServices;


@CrossOrigin(origins="*")
@RestController
public class AppController {
	
	@Autowired
	private BasicServices simpleservice;
	
	@Autowired
	private TicketServices ticketservice;
	
	@Autowired
	private AdminService adminservice;
	
	@Autowired
	private FileOperationServices fileOpservice;
	
	@GetMapping("/")
	public UserModel login(Principal principal) {
		return simpleservice.getUserRoles(principal.getName());
		
	}
	

	@CrossOrigin(origins="*")
	@PostMapping("/submitTicket")
	public void submit(@RequestBody TicketModel ticketRequest) {
		
		 ticketservice.submitTicket(ticketRequest);
		
	}
	
	@PostMapping("/register")
	public MailResponse register(@RequestBody UserModel userRequest) {
		
		return simpleservice.registerUser(userRequest);
		
	}
	
	@CrossOrigin(origins="*")
	@PostMapping("/forgetPassword")
	public MailResponse forgetMail(@RequestBody String email) {
		
		return simpleservice.getUser(email);
	}
	
	
	@CrossOrigin(origins="*")	
	@GetMapping("/getList")
	public List<TicketEntity> getTicketLists() {
		return ticketservice.getTicketsByUsernames();
	}
		
	
	
	@CrossOrigin(origins = "http://localhost:4200/")
    @PatchMapping("/updateTicket")
    public String updateTicket(@RequestBody TicketModel updatedData) {
    	return ticketservice.updateTicket(updatedData);
      
    }

	@CrossOrigin(origins="*")	
	@GetMapping("/get/{name}")
	public Page<TicketEntity> getTicketList(@PathVariable("name") String name,@RequestParam(defaultValue="0")int page) {
	
		return ticketservice.getTicketsByUsername(name,page,4);
	}


	
	@CrossOrigin(origins="*")
    @PostMapping(value="/uploadImage")
	public BodyBuilder uplaodImage(@RequestParam("comment") String comment,@RequestParam("id") String id,@RequestParam("status") String status, @RequestParam("imageFile") MultipartFile file) throws IOException {


        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        AdminResponseEntity img = new AdminResponseEntity(id,file.getOriginalFilename() ,comment,fileOpservice.compressBytes(file.getBytes()), status,file.getContentType());
        adminservice.saveResponse(img);
        ticketservice.updateStatus(id, status);
        return ResponseEntity.status(HttpStatus.OK);
	}


	@CrossOrigin(origins = "*")
	@PostMapping("/getResponse")
    public AdminResponseEntity  getImage(@RequestBody String id) throws IOException {
	AdminResponseEntity retrievedImage = adminservice.getResponseById(id);

        AdminResponseEntity img = new  AdminResponseEntity(retrievedImage.getTicketId(), retrievedImage.getFileName(), retrievedImage.getComments(),
        		fileOpservice.decompressBytes(retrievedImage.getPdf()),retrievedImage.getStatus(),retrievedImage.getContentType());
        return  img;
    }

   

	
	
}
