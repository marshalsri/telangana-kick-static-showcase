import { Button } from "@/components/ui/button";
import { Search, User, ShoppingBag } from "lucide-react";
import tfaLogo from "@/assets/tfa-logo.png";

const Header = () => {
  const navItems = [
    "GOVERNANCE",
    "NATIONAL TEAM", 
    "COMPETITIONS",
    "DEVELOPMENT",
    "DOCUMENTS",
    "NEWS",
    "FAN ZONE"
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Spotlight: TFA issues Request for Proposal</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-dark">
              <ShoppingBag className="w-4 h-4 mr-1" />
              Shop
            </Button>
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-primary-foreground/20 rounded"></div>
              <div className="w-4 h-4 bg-primary-foreground/20 rounded"></div>
              <div className="w-4 h-4 bg-primary-foreground/20 rounded"></div>
              <div className="w-4 h-4 bg-primary-foreground/20 rounded"></div>
            </div>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-dark">
              Login | Register
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background shadow-soft">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <img src={tfaLogo} alt="TFA Logo" className="w-16 h-16" />
              <div>
                <div className="text-xs text-muted-foreground">TELANGANA</div>
                <div className="font-bold text-lg text-primary">FOOTBALL</div>
                <div className="font-bold text-lg text-primary">ASSOCIATION</div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="font-medium text-foreground hover:text-primary hover:bg-transparent"
                >
                  {item}
                </Button>
              ))}
            </nav>

            {/* Search */}
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;