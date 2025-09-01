import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContentAPI } from "@/hooks/useContentAPI";
import { useGoogleSheetsAPI } from "@/hooks/useGoogleSheetsAPI";

interface ContentManagerProps {
  onContentUpdate: (content: any) => void;
}

const ContentManager = ({ onContentUpdate }: ContentManagerProps) => {
  // JSON API State
  const [jsonUrl, setJsonUrl] = useState('');
  const { content: jsonContent, loading: jsonLoading, error: jsonError } = useContentAPI(jsonUrl);

  // Google Sheets API State
  const [sheetsConfig, setSheetsConfig] = useState({
    spreadsheetId: '',
    apiKey: '',
    ranges: {
      news: 'News!A:D',
      matches: 'Matches!A:F',
      socialMedia: 'SocialMedia!A:D'
    }
  });
  const [enableSheets, setEnableSheets] = useState(false);
  
  const { content: sheetsContent, loading: sheetsLoading, error: sheetsError } = useGoogleSheetsAPI(
    enableSheets ? sheetsConfig : undefined
  );

  const handleJsonSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (jsonUrl && jsonContent) {
      onContentUpdate(jsonContent);
    }
  };

  const handleSheetsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnableSheets(true);
    if (sheetsContent) {
      onContentUpdate(sheetsContent);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Content Management</h3>
      
      <Tabs defaultValue="json" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="json">JSON API</TabsTrigger>
          <TabsTrigger value="sheets">Google Sheets</TabsTrigger>
        </TabsList>
        
        <TabsContent value="json" className="space-y-4">
          <Card className="p-6">
            <h4 className="text-lg font-semibold mb-4">JSON API Configuration</h4>
            <form onSubmit={handleJsonSubmit} className="space-y-4">
              <div>
                <Label htmlFor="jsonUrl">JSON File URL</Label>
                <Input
                  id="jsonUrl"
                  value={jsonUrl}
                  onChange={(e) => setJsonUrl(e.target.value)}
                  placeholder="https://your-domain.com/content.json"
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Host your JSON file on GitHub Pages, CDN, or any web server
                </p>
              </div>
              
              <Button type="submit" disabled={!jsonUrl || jsonLoading}>
                {jsonLoading ? 'Loading...' : 'Load Content'}
              </Button>
              
              {jsonError && (
                <p className="text-sm text-destructive">Error: {jsonError}</p>
              )}
              
              {jsonContent && (
                <p className="text-sm text-green-600">✓ Content loaded successfully!</p>
              )}
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="sheets" className="space-y-4">
          <Card className="p-6">
            <h4 className="text-lg font-semibold mb-4">Google Sheets Configuration</h4>
            <form onSubmit={handleSheetsSubmit} className="space-y-4">
              <div>
                <Label htmlFor="spreadsheetId">Spreadsheet ID</Label>
                <Input
                  id="spreadsheetId"
                  value={sheetsConfig.spreadsheetId}
                  onChange={(e) => setSheetsConfig(prev => ({ ...prev, spreadsheetId: e.target.value }))}
                  placeholder="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Found in the Google Sheets URL
                </p>
              </div>
              
              <div>
                <Label htmlFor="apiKey">Google Sheets API Key</Label>
                <Input
                  id="apiKey"
                  type="password"
                  value={sheetsConfig.apiKey}
                  onChange={(e) => setSheetsConfig(prev => ({ ...prev, apiKey: e.target.value }))}
                  placeholder="AIzaSyC4zmAaOKmKAI2YjD2LoAq-W3f7P8oV0bA"
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Get from Google Cloud Console
                </p>
              </div>
              
              <Button 
                type="submit" 
                disabled={!sheetsConfig.spreadsheetId || !sheetsConfig.apiKey || sheetsLoading}
              >
                {sheetsLoading ? 'Loading...' : 'Connect to Sheets'}
              </Button>
              
              {sheetsError && (
                <p className="text-sm text-destructive">Error: {sheetsError}</p>
              )}
              
              {sheetsContent && (
                <p className="text-sm text-green-600">✓ Connected to Google Sheets!</p>
              )}
            </form>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Example JSON Structure */}
      <Card className="p-6">
        <h4 className="text-lg font-semibold mb-4">Example JSON Structure</h4>
        <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`{
  "news": [
    {
      "category": "State Team",
      "title": "Telangana wins championship",
      "image": "https://example.com/image.jpg",
      "link": "/news/article-1"
    }
  ],
  "matches": [
    {
      "homeTeam": "Telangana FC",
      "awayTeam": "Kerala United",
      "date": "2024-09-15",
      "time": "16:00",
      "venue": "GMC Stadium",
      "competition": "State League"
    }
  ],
  "socialMedia": [
    {
      "platform": "Facebook",
      "handle": "TelanganaFootball",
      "followers": "125K",
      "icon": "📘"
    }
  ]
}`}
        </pre>
      </Card>
    </div>
  );
};

export default ContentManager;