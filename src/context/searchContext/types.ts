export interface SearchContextValue {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchActive: boolean;
  setIsSearchActive: (active: boolean) => void;
}
