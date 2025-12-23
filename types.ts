
export interface BeforeAfterPair {
  before: string;
  after: string;
  title: string;
}

export interface GalleryItem {
  url: string;
  category: 'social' | 'kids' | 'backstage' | 'result';
  caption?: string;
}
