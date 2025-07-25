import { useMemo } from 'react';

import { useSearch } from 'context/searchContext';

import { SearchableItem } from './types';

export const useFilteredData = <T extends SearchableItem>(data: T[]): T[] => {
  const { searchQuery, isSearchActive } = useSearch();

  return useMemo(() => {
    if (!isSearchActive || !searchQuery.trim()) {
      return data;
    }

    const query = searchQuery.toLowerCase().trim();

    return data.filter((item) => item.name.toLowerCase().includes(query));
  }, [data, searchQuery, isSearchActive]);
};
