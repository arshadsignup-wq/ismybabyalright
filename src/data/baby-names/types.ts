export interface BabyName {
  slug: string;
  name: string;
  gender: 'boy' | 'girl' | 'unisex';
  origin: string;
  meaning: string;
  popularity: 'trending' | 'classic' | 'unique' | 'rising';
  tags: string[];
}
