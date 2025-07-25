import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  PropsWithChildren,
  FC,
} from 'react';

import { SearchContextValue } from './types';

const SearchContext = createContext<SearchContextValue | null>(null);

export const SearchProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const value = useMemo(
    () => ({
      searchQuery,
      setSearchQuery,
      isSearchActive,
      setIsSearchActive,
    }),
    [searchQuery, isSearchActive],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }

  return context;
};
