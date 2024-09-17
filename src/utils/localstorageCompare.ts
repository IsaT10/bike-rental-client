import { TBike } from '@/types';

const LOCAL_STORAGE_KEY = 'compareList';

export const getCompareListFromLocalStorage = (): TBike[] => {
  const compareList = localStorage.getItem('compareList');
  return compareList ? JSON.parse(compareList) : [];
};

export const setCompareListInLocalStorage = (newList: TBike[]) => {
  localStorage.setItem('compareList', JSON.stringify(newList));

  // Dispatch a custom event to notify about the update
  const event = new Event('compareListUpdated');
  window.dispatchEvent(event);
};

// Save comparison list to localStorage
export const saveCompareListToLocalStorage = (list: TBike[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
};

// Clear comparison list from localStorage
export const clearCompareListFromLocalStorage = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
