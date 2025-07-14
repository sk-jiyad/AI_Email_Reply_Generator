package com.email.writer.app;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class EmailGeneratorController {

    private final EmailGeneratorService emailGeneratorService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        System.out.println("Received originalEmail: " + emailRequest.getOriginalEmail());
        System.out.println("Received tone: " + emailRequest.getTone());

        if (emailRequest.getOriginalEmail() == null || emailRequest.getOriginalEmail().isEmpty()) {
            return ResponseEntity.badRequest().body("Missing originalEmail");
        }
        String response = emailGeneratorService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }
}