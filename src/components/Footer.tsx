import { Button } from "@/components/ui/button";
import tfaLogo from "@/assets/tfa-logo.png";

const Footer = () => {
  const footerSections = [
    {
      title: "About TFA",
      links: [
        "About Us",
        "Our Mission", 
        "Leadership",
        "Annual Reports",
        "Contact Us"
      ]
    },
    {
      title: "Competitions",
      links: [
        "State League",
        "Youth Tournaments",
        "Women's Championship",
        "District Leagues", 
        "School Championships"
      ]
    },
    {
      title: "Development",
      links: [
        "Coaching Education",
        "Referee Development",
        "Youth Programs",
        "Grassroots Football",
        "Technical Courses"
      ]
    },
    {
      title: "Resources",
      links: [
        "Rules & Regulations",
        "Forms & Documents", 
        "Registration",
        "Ground Booking",
        "Medical Guidelines"
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Logo and Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img src={tfaLogo} alt="TFA Logo" className="w-16 h-16" />
              <div>
                <div className="text-sm opacity-80">TELANGANA</div>
                <div className="font-bold text-lg">FOOTBALL</div>
                <div className="font-bold text-lg">ASSOCIATION</div>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 leading-relaxed">
              The Telangana Football Association is the governing body for football in 
              Telangana state, dedicated to promoting and developing the beautiful game 
              at all levels across the region.
            </p>
            <div className="flex space-x-4">
              {["📘", "🐦", "📷", "🎥"].map((icon, index) => (
                <Button key={index} variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-dark">
                  <span className="text-lg">{icon}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-dark p-0 h-auto font-normal text-sm">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2025 Telangana Football Association. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto font-normal">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto font-normal">
                Terms of Service
              </Button>
              <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto font-normal">
                Cookie Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;