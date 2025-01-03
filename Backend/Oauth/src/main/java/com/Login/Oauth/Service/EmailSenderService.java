package com.Login.Oauth.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.AllArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@AllArgsConstructor
public class EmailSenderService {
    private JavaMailSender mailSender;

    public void sendEmail(String toEmail,String Subject,String body){
        SimpleMailMessage simpleMailMessage=new SimpleMailMessage();
        simpleMailMessage.setFrom("finsyncsystem@gmail.com");
        simpleMailMessage.setTo(toEmail);
        simpleMailMessage.setText(body);
        simpleMailMessage.setSubject(Subject);

        mailSender.send(simpleMailMessage);
    }

    public void sendWelcomeEmail(String toEmail) throws Exception {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        // Load and modify the HTML template
        Path templatePath = Paths.get(new ClassPathResource("templates/Welcome.html").getURI());
        String htmlContent = Files.readString(templatePath);

        helper.setTo(toEmail);
        helper.setSubject("Welcome to Fin Sync");
        helper.setText(htmlContent, true);

        mailSender.send(message);
    }

    public void invitePerson(String from_username,String to_email) throws Exception{
        // Create a MimeMessage
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        // Load and modify the HTML template
        Path templatePath = Paths.get(new ClassPathResource("templates/Invitation.html").getURI());
        String htmlContent = Files.readString(templatePath);

        // Replace placeholders in the template with dynamic values
        htmlContent = htmlContent.replace("[Inviter's Name]", "<b>" + from_username + "</b>");

        // Set email properties
        helper.setTo(to_email);
        helper.setSubject("You're Invited to Join Fin Sync!");
        helper.setText(htmlContent, true);

        // Send the email
        mailSender.send(message);
    }
}
