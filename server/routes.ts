import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      await sendContactEmail(validatedData);
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function sendContactEmail(data: any) {
  // In a real implementation, you would use a service like Nodemailer
  // For now, we'll simulate the email sending
  const emailContent = `
    New Contact Form Submission from Algonimation Website
    
    Name: ${data.firstName} ${data.lastName}
    Email: ${data.email}
    Phone: ${data.phone || 'Not provided'}
    Company: ${data.company || 'Not provided'}
    Service Interest: ${data.service}
    
    Message:
    ${data.message}
    
    Submitted at: ${new Date().toISOString()}
  `;
  
  console.log("Email would be sent to jayeshvyas321@gmail.com:");
  console.log(emailContent);
  
  // TODO: Implement actual email sending with Nodemailer
  // const transporter = nodemailer.createTransporter({...});
  // await transporter.sendMail({
  //   to: 'jayeshvyas321@gmail.com',
  //   subject: 'New Contact Form Submission - Algonimation',
  //   text: emailContent
  // });
}
