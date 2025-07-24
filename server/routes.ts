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

  // Admin route to view contact submissions (for development/testing)
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function sendContactEmail(data: any) {
  // For now, we'll log the contact submission and store it
  // This can be easily upgraded to use email services later
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
  
  console.log("📧 NEW CONTACT SUBMISSION:");
  console.log("=" .repeat(50));
  console.log(emailContent);
  console.log("=" .repeat(50));
  
  // Store this in a simple way that can be retrieved later
  // In the future, you can:
  // 1. Use Nodemailer with Gmail SMTP (free)
  // 2. Use EmailJS (free tier available)
  // 3. Use Resend.com (free tier)
  // 4. Or upgrade to SendGrid later when you have a domain
  
  return true; // Simulate successful email sending
}
