
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  ADVISORY = 'ADVISORY',
  CROP_DOCTOR = 'CROP_DOCTOR',
  MARKET = 'MARKET',
  ASSISTANT = 'ASSISTANT'
}

export interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

export interface MarketData {
  crop: string;
  price: number;
  trend: 'up' | 'down' | 'stable';
  history: { day: string; price: number }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface NewsSource {
  title: string;
  uri: string;
}

export interface NewsResponse {
  text: string;
  sources: NewsSource[];
}

export interface Remedy {
  product_name: string;
  action: string;
  dosage?: string;
  frequency?: string;
  precautions?: string;
}

export interface DiseaseAnalysis {
  disease_name: string;
  confidence: number;
  other_potential_causes?: { name: string; likelihood: string }[];
  description: string;
  organic_remedies: Remedy[];
  chemical_remedies: Remedy[];
  prevention_tips: string[];
  best_practices: string[];
}

export interface PestAlert {
  crop_name: string;
  pest_name: string;
  identification_tip: string;
  organic_control: string;
}

export interface AdvisoryResult {
  advisory_content: string;
  recommended_crops?: string[];
  pest_alerts: PestAlert[];
}
