import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NewsSection = () => {
  const newsItems = [
    {
      category: "State Men's Team U23",
      title: "Coach Narasimha announces Telangana squad for state championship qualifiers",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      category: "Sub Junior Girls' Championship", 
      title: "Hyderabad defeat Warangal to win third Sub-Junior Girls' Championship",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      category: "Senior State Team",
      title: "Telangana prepares for crucial match against Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=250&fit=crop", 
      link: "#"
    },
    {
      category: "Youth Development",
      title: "New football academy opens in Nizamabad district",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      category: "Women's Football",
      title: "Telangana women's team captain leads by example",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      category: "Infrastructure",
      title: "State-of-the-art training facility inaugurated in Secunderabad",
      image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400&h=250&fit=crop",
      link: "#"
    }
  ];

  const socialMedia = [
    {
      platform: "Facebook",
      handle: "TelanganaFootball",
      followers: "125K",
      icon: "📘"
    },
    {
      platform: "Twitter", 
      handle: "@TelanganaFA",
      followers: "89K",
      icon: "🐦"
    },
    {
      platform: "Instagram",
      handle: "@telangana_football", 
      followers: "156K",
      icon: "📷"
    },
    {
      platform: "YouTube",
      handle: "TFA Official",
      followers: "67K", 
      icon: "🎥"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* News Section */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">News</h2>
              <Button variant="ghost" className="text-primary hover:text-primary-dark">
                All News ›
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-shadow">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-primary font-medium mb-2 uppercase tracking-wide">
                      {item.category}
                    </div>
                    <h3 className="font-bold text-foreground mb-3 line-clamp-3 leading-tight">
                      {item.title}
                    </h3>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark p-0">
                      Read More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-6">TFA on Social Media</h3>
            <div className="space-y-4">
              {socialMedia.map((social, index) => (
                <Card key={index} className="p-4 shadow-soft hover:shadow-medium transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{social.icon}</div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{social.platform}</div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                      <div className="text-xs text-primary font-medium">{social.followers} followers</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  "Match Schedules",
                  "Player Registration", 
                  "Coaching Courses",
                  "Referee Programs",
                  "Ground Booking",
                  "Contact Us"
                ].map((link, index) => (
                  <Button key={index} variant="ghost" className="w-full justify-start text-left p-2 text-muted-foreground hover:text-primary">
                    {link}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;