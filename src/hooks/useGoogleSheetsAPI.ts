import { useState, useEffect } from 'react';

interface GoogleSheetsConfig {
  spreadsheetId: string;
  apiKey: string;
  ranges: {
    news: string;
    matches: string;
    socialMedia: string;
  };
}

export const useGoogleSheetsAPI = (config?: GoogleSheetsConfig) => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSheetData = async (range: string) => {
    if (!config) return [];
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${range}?key=${config.apiKey}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${range}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.values || [];
  };

  const parseNewsData = (rows: string[][]) => {
    return rows.slice(1).map(row => ({
      category: row[0] || '',
      title: row[1] || '',
      image: row[2] || '',
      link: row[3] || '#'
    }));
  };

  const parseMatchData = (rows: string[][]) => {
    return rows.slice(1).map(row => ({
      homeTeam: row[0] || '',
      awayTeam: row[1] || '',
      date: row[2] || '',
      time: row[3] || '',
      venue: row[4] || '',
      competition: row[5] || ''
    }));
  };

  const parseSocialMediaData = (rows: string[][]) => {
    return rows.slice(1).map(row => ({
      platform: row[0] || '',
      handle: row[1] || '',
      followers: row[2] || '',
      icon: row[3] || ''
    }));
  };

  useEffect(() => {
    if (!config) return;

    const fetchAllData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [newsRows, matchRows, socialRows] = await Promise.all([
          fetchSheetData(config.ranges.news),
          fetchSheetData(config.ranges.matches),
          fetchSheetData(config.ranges.socialMedia)
        ]);

        setContent({
          news: parseNewsData(newsRows),
          matches: parseMatchData(matchRows),
          socialMedia: parseSocialMediaData(socialRows)
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
        console.error('Google Sheets API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [config]);

  return { content, loading, error };
};

// Example Google Sheets setup instructions:
/*
1. Create a Google Sheet with 3 tabs: "News", "Matches", "SocialMedia"

2. News tab structure (Row 1 headers):
   A1: Category | B1: Title | C1: Image | D1: Link

3. Matches tab structure:
   A1: HomeTeam | B1: AwayTeam | C1: Date | D1: Time | E1: Venue | F1: Competition

4. SocialMedia tab structure:
   A1: Platform | B1: Handle | C1: Followers | D1: Icon

5. Get Google Sheets API key from Google Cloud Console
6. Make your sheet public or share with service account
7. Use the spreadsheet ID from the URL
*/