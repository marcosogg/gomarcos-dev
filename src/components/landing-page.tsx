import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, ExternalLink, Youtube, FileText, Database, Zap, CalendarDays, Activity, Linkedin } from "lucide-react";

const LandingPage = () => {
  return <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-slate-900 text-white py-3 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="font-bold text-xl">VMP+</span>
          <div className="flex items-center space-x-6">
            <a href="https://github.com/marcosogg/vmpplus-hdip-final-project" className="text-sm hover:text-blue-300 transition-colors">GitHub</a>
            <a href="#demo-link" className="text-sm hover:text-blue-300 transition-colors">Live Demo</a>
            <a href="#video-link" className="text-sm hover:text-blue-300 transition-colors">Video</a>
            <a href="#report-link" className="text-sm hover:text-blue-300 transition-colors">Report</a>
          </div>
        </div>
      </nav>

      {/* Header Section - Updated for Phase 1 */}
      <header className="relative bg-white border-b">
        <div className="container mx-auto px-4">
          {/* Apply flex layout for medium screens and up */}
          <div className="max-w-3xl mx-auto text-center md:flex md:items-start md:text-left md:max-w-full pt-16">
            {/* Left Column: Text Content */}
            <div className="md:w-3/5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                VMP+
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mt-2 mb-8">Your Vendors. One Platform.</p>
              <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
                VMP+ is a full-stack web application designed to streamline and optimize vendor management processes. It replaces manual workflows with a centralized platform, enabling efficient management of vendors, contracts, and performance metrics. Built for the Higher Diploma in Computer Science.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {/* Project Report Button - Updated to match GitHub button style */}
                <Button size="lg" variant="secondary" asChild>
                  <a href="#report-link">View Project Report</a>
                </Button>
                {/* Live Demo Button - Adjusted for contrast */}
                <Button
                  size="lg"
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <a href="#demo-link">Live Demo</a>
                </Button>
              </div>
            </div>
            {/* Right Column: Image */}
            <div className="md:w-2/5 md:pl-8 mt-12 md:mt-0 relative">
              {/* Adjust image classes */}
              <div className="relative -mt-[72px]">
                <img 
                  src="/poster.png" 
                  alt="VMP PLUS Project Poster - Before and After" 
                  className="w-full max-w-md relative z-0" 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow">
        {/* About the Developer */}
        <section className="bg-gray-50/50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl md:max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-start md:gap-16">
                {/* Left Column - Image */}
                <div className="md:w-2/5 mb-8 md:mb-0">
                  <img 
                    src="/avatar.PNG" 
                    alt="Marcos O. Gomes" 
                    className="rounded-2xl shadow-lg w-full max-w-xs mx-auto object-cover"
                  />
                </div>
                {/* Right Column - Content */}
                <div className="md:w-3/5 bg-slate-50 p-6 rounded-lg">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Hi, I'm Marcos.</h2>
                  
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    As a <strong>procurement specialist</strong>, I bring a unique perspective to VMP PLUS, combining my emerging <strong>tech skills</strong> with a decade of <strong>hands-on procurement experience</strong>. 
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">Project Origin</h3>
                  <ul className="list-disc pl-5 text-gray-600 text-lg mb-4 leading-relaxed">
                    <li>Identified and solved <strong>real-world vendor management challenges</strong> over <strong>1.5 years</strong> in my corporate procurement role</li>
                    <li>Designed and proposed the initial solution to stakeholders up to the <strong>VP level</strong></li>
                    <li>Concept selected for a competitive company <strong>AI hackathon (2024)</strong></li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">Implementation</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Deep familiarity with <strong>business needs</strong> and prior validation allowed me to focus my <strong>Higher Diploma</strong> efforts on creating a practical tool grounded in significant <strong>real-world experience</strong>.
                  </p>
                  
                  <Button variant="outline" asChild className="gap-2">
                    <a href="https://www.linkedin.com/in/marcosogomes/" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={18} />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard icon={<Database className="h-10 w-10 text-blue-600" />} title="Centralized Vendor Data" description="Save Time: Easily manage and access all vendor information in one place." />
              <FeatureCard icon={<Zap className="h-10 w-10 text-blue-600" />} title="Automated Workflows" description="Boost Efficiency: Streamline processes like vendor onboarding and contract renewals." />
              <FeatureCard icon={<FileText className="h-10 w-10 text-blue-600" />} title="Contract Management" description="Reduce Risk: Track contract lifecycles, key dates, and compliance requirements." />
              <FeatureCard icon={<Activity className="h-10 w-10 text-blue-600" />} title="Performance Monitoring" description="Optimize Value: Monitor vendor performance against key metrics and SLAs." />
            </div>
          </div>
        </section>

        {/* Project Demonstration Video */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Corporate AI Hackathon 2024 - Project Concept Demo</h2>
            <p className="text-gray-600 mb-4 text-center max-w-3xl mx-auto">
              Watch this concept demo presented at the Corporate AI Hackathon 2024 to see VMP+ core ideas in action.
            </p>
            <div className="max-w-4xl mx-auto">
              <Card className="p-2">
                <video src="/ProcurementVMP.mp4" controls className="w-full aspect-video rounded-lg"></video>
              </Card>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => {
                const iconSrc = tech === "shadcn/ui"
                  ? "/shadcnui.svg"
                  : `/${tech.toLowerCase().replace(/\s+/g, "")}.svg`;
                
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors border border-border hover:shadow-md"
                  >
                    <img 
                      src={iconSrc} 
                      alt={`${tech} Logo`} 
                      title={getTechDescription(tech)}
                      className="h-12 w-12 mb-2" 
                      onError={(e) => { 
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/placeholder.svg';
                        console.warn(`Icon not found for ${tech}, using path: ${iconSrc}`);
                      }}
                    />
                    <div className="font-medium text-lg">{tech}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-slate-900 py-16 md:py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore the Project</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Access the code, live demo, and documentation to see how VMP PLUS can transform your vendor management processes.
            </p>
            <Button variant="secondary" size="lg" className="font-semibold" asChild>
              <a href="https://github.com/marcosogg/vmpplus-hdip-final-project" className="flex items-center gap-2">
                <Github size={20} />
                View GitHub Repository
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        {/* Bottom Band (Light Gray) */}
        <div className="bg-slate-100 text-slate-500 py-6">
          <div className="container mx-auto px-4">
            <p className="text-center">&copy; {new Date().getFullYear()} VMP+ Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};

// Helper Components
const FeatureCard = ({
  icon,
  title,
  description
}) => <Card className="h-full border border-border hover:shadow-lg hover:scale-[1.03] transition-all duration-200 ease-in-out">
    <CardHeader>
      <div className="mb-2">{icon}</div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>;
const FooterLink = ({
  icon,
  text,
  href
}) => <li>
    <a href={href} className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors">
      {icon}
      <span>{text}</span>
    </a>
  </li>;

// Data
const technologies = ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "PostgreSQL"];

// Function to get technology descriptions for tooltips
const getTechDescription = (tech: string): string => {
  const descriptions: Record<string, string> = {
    "React": "Used for building the dynamic user interface components",
    "TypeScript": "Provides type safety and improved developer experience",
    "Vite": "Fast and efficient build tool and development server",
    "Tailwind CSS": "Utility-first CSS framework for rapid UI development",
    "shadcn/ui": "Accessible and customizable UI component library",
    "Supabase": "Backend-as-a-Service for database, authentication, and APIs",
    "PostgreSQL": "Robust relational database for structured data storage"
  };
  return descriptions[tech] || `${tech} technology`;
};

export default LandingPage;
