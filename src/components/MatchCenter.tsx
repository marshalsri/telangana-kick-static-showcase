import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MatchCenter = () => {
  const matches = [
    {
      date: "31",
      day: "SUNDAY",
      month: "AUG 2025",
      competition: "Telangana Premier League - 1st Division 2025-26",
      venue: "Gachibowli Stadium",
      homeTeam: "Hyderabad FC",
      awayTeam: "Warangal Warriors",
      homeScore: 2,
      awayScore: 1,
      status: "past",
      homeLogo: "⚽",
      awayLogo: "⚽"
    },
    {
      date: "01", 
      day: "MONDAY",
      month: "SEP 2025",
      competition: "TELANGANA YOUTH U15 (Boys) 2025-26",
      venue: "Karimnagar Stadium",
      homeTeam: "Nizamabad FC",
      awayTeam: "Khammam United",
      homeScore: null,
      awayScore: null,
      status: "today",
      homeLogo: "⚽",
      awayLogo: "⚽"
    },
    {
      date: "01",
      day: "MONDAY", 
      month: "SEP 2025",
      competition: "TELANGANA STATE SUB JUNIOR BOYS IDFT 2025-26",
      venue: "SPORTS COMPLEX, MEDAK",
      homeTeam: "Medak District Football Association",
      awayTeam: "Rangareddy District Football Association",
      homeScore: 0,
      awayScore: 33,
      status: "today",
      homeLogo: "⚽",
      awayLogo: "⚽"
    },
    {
      date: "01",
      day: "MONDAY",
      month: "SEP 2025", 
      competition: "TELANGANA STATE SUB JUNIOR BOYS IDFT 2025-26",
      venue: "SPORTS COMPLEX, MEDAK",
      homeTeam: "Adilabad District Football Association",
      awayTeam: "Nalgonda District Football Association", 
      homeScore: 1,
      awayScore: 2,
      status: "today",
      homeLogo: "⚽",
      awayLogo: "⚽"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'past':
        return 'bg-match-past';
      case 'today':
        return 'bg-match-today';
      case 'upcoming':
        return 'bg-match-upcoming';
      default:
        return 'bg-match-past';
    }
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Match Center</h2>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {matches.map((match, index) => (
            <Card key={index} className="overflow-hidden shadow-soft">
              {/* Date Header */}
              <div className={`${getStatusColor(match.status)} text-white p-4 text-center`}>
                <div className="text-3xl font-bold">{match.date}</div>
                <div className="text-xs">{match.day}</div>
                <div className="text-xs">{match.month}</div>
              </div>

              {/* Match Content */}
              <div className="p-4">
                <div className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {match.competition}
                </div>
                <div className="text-xs text-muted-foreground mb-4">
                  {match.venue}
                </div>

                {/* Teams and Score */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 flex-1">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-xs">
                      {match.homeLogo}
                    </div>
                    <div className="text-sm font-medium line-clamp-2 flex-1">
                      {match.homeTeam}
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold mx-4">
                    {match.homeScore !== null ? match.homeScore : '-'} - {match.awayScore !== null ? match.awayScore : '-'}
                  </div>
                  
                  <div className="flex items-center space-x-2 flex-1 justify-end">
                    <div className="text-sm font-medium line-clamp-2 flex-1 text-right">
                      {match.awayTeam}
                    </div>
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-xs">
                      {match.awayLogo}
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" size="sm">
                  Go to details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchCenter;