package com.ust.serviceplatform.controller;

import com.ust.serviceplatform.model.Users;
import com.ust.serviceplatform.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public ResponseEntity<Users> registerUser(@RequestBody Users user) {
		Users registeredUser = userService.registerUser(user);
		return ResponseEntity.ok(registeredUser);
	}

	@GetMapping("/login/{username}")
	public ResponseEntity<Long> findIdByUsername(@PathVariable String username) {
		System.out.println(username);
		Users user = userService.findByUsername(username);
		System.out.println(user);
		return ResponseEntity.ok(user.getId());
	}

	@GetMapping("/address/{userId}")
	public ResponseEntity<Map<String, String>> findAddress(@PathVariable Long userId) {
		Optional<Users> user = userService.findAddress(userId);

		if (user.isPresent()) {
			Map<String, String> response = new HashMap<>();
			response.put("address", user.get().getAddress());
			return ResponseEntity.ok(response); // Return as a JSON object
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // Return 404 if user not found
		}
	}

}
