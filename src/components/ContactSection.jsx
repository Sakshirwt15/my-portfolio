import { Linkedin, Mail, MapPin, Phone, Send, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info card */}
          <div className="bg-card p-8 rounded-lg shadow-xs flex flex-col justify-between h-full">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Contact Information
              </h3>

              {/* Centered contact details */}
              <div className="space-y-6 w-full max-w-xs">
                {/* Email */}
                <div className="flex flex-col items-center">
                  <Mail className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sakshirawat964@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-center"
                  >
                    sakshirawat964@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center">
                  <Phone className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918791242313"
                    className="text-muted-foreground hover:text-primary transition-colors text-center"
                  >
                    +91 87912 42313
                  </a>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center">
                  <MapPin className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground text-center">
                    Dehradun, Uttarakhand, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-8 w-full">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex justify-center gap-8">
                <a
                  href="https://www.linkedin.com/in/sakshi-rawat-035321321/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/sakshirwt15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div
            className="bg-card p-8 rounded-lg shadow-xs flex flex-col justify-between h-full"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="youremail@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
