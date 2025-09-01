import { useState, useEffect } from 'react';

interface NewsItem {
  category: string;
  title: string;
  image: string;
  link: string;
}

interface Match {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  competition: string;
}

interface SocialMedia {
  platform: string;
  handle: string;
  followers: string;
  icon: string;
}

interface ContentData {
  news: NewsItem[];
  matches: Match[];
  socialMedia: SocialMedia[];
}

export const useContentAPI = (jsonUrl?: string) => {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!jsonUrl) return;

    const fetchContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch content');
        console.error('Error fetching content:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [jsonUrl]);

  return { content, loading, error };
};

// Example JSON structure for reference
export const exampleContentStructure = {
  news: [
    {
      category: "State Men's Team U23",
      title: "Coach Narasimha announces Telangana squad for state championship qualifiers",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
      link: "#"
    }
  ],
  matches: [
    {
      homeTeam: "Telangana FC",
      awayTeam: "Kerala United",
      date: "2024-09-15",
      time: "16:00",
      venue: "GMC Balayogi Stadium",
      competition: "State Championship"
    }
  ],
  socialMedia: [
    {
      platform: "Facebook",
      handle: "TelanganaFootball",
      followers: "125K",
      icon: "📘"
    }
  ]
};