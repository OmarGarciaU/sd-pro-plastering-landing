import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";
import heroImage from "@/assets/hero-stucco.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import ongoing1 from "@/assets/ongoing-1.jpg";
import ongoing2 from "@/assets/ongoing-2.jpg";

const Index = () => {
  const projects = [
    { image: project1, title: "Mediterranean Villa", location: "La Jolla, CA" },
    { image: project2, title: "Modern Residence", location: "Del Mar, CA" },
    { image: project3, title: "Spanish Colonial", location: "Coronado, CA" },
  ];

  const ongoingProjects = [
    { image: ongoing1, title: "Commercial Building", progress: "75%", location: "Downtown San Diego" },
    { image: ongoing2, title: "Residential Renovation", progress: "40%", location: "Pacific Beach, CA" },
  ];

  const services = [
    { title: "Exterior Stucco", description: "Complete exterior plastering for new construction and renovations" },
    { title: "Interior Plastering", description: "Smooth and textured finishes for interior walls" },
    { title: "Stucco Repair", description: "Expert crack repair and patch work" },
    { title: "Color Coating", description: "Premium color finishes and elastomeric coatings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container-narrow section-padding py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-semibold text-foreground">SD PRO</span>
              <span className="text-muted-foreground text-sm">Plastering</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
            <Button variant="default" size="sm" className="hidden md:flex">
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Professional stucco plastering work" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay/60" />
        </div>
        <div className="relative z-10 container-narrow section-padding pt-32">
          <div className="max-w-2xl">
            <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Family Owned Since 1998
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-medium leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Crafting Beautiful<br />Stucco Finishes
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-lg mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              San Diego's trusted stucco and plastering experts. Quality craftsmanship for residential and commercial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg">
                View Our Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="heroOutline" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                (619) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-section-alt section-padding">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <h3 className="font-display text-lg font-medium text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">Completed Projects</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-hero-overlay/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-display text-lg text-primary-foreground font-medium">{project.title}</h3>
                  <p className="text-primary-foreground/70 text-sm flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="bg-section-alt section-padding">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-widest uppercase mb-3">In Progress</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">Current Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg overflow-hidden border border-border"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-lg font-medium text-foreground">{project.title}</h3>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {project.progress}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm tracking-widest uppercase mb-3">Get In Touch</p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                Let's Discuss Your Project
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need new construction stucco, repairs, or a complete renovation, our family team brings over 25 years of experience to every project. Contact us for a free estimate.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">(619) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">info@sdproplastering.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Service Area</p>
                    <p className="text-foreground font-medium">San Diego County, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="font-display text-xl font-medium text-foreground mb-6">Request a Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project"
                  />
                </div>
                <Button variant="default" className="w-full" size="lg">
                  Send Request
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground section-padding py-12">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-semibold">SD PRO</span>
              <span className="text-primary-foreground/60 text-sm">Plastering</span>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              © 2024 SD PRO Plastering. All rights reserved. License #123456
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
