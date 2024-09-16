import { TBike } from '@/types';

const LOCAL_STORAGE_KEY = 'compareList';

// Get comparison list from localStorage
export const getCompareListFromLocalStorage = (): TBike[] => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Save comparison list to localStorage
export const saveCompareListToLocalStorage = (list: TBike[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
};

// Clear comparison list from localStorage
export const clearCompareListFromLocalStorage = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
