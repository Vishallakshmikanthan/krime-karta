import { create } from 'zustand';

interface AppState {
  selectedDistrict: string;
  selectedTimeWindow: number;
  activeTab: 'map' | 'syndicate' | 'briefing' | 'records';
  selectedCellId: string | null;
  setSelectedDistrict: (district: string) => void;
  setSelectedTimeWindow: (hours: number) => void;
  setActiveTab: (tab: 'map' | 'syndicate' | 'briefing' | 'records') => void;
  setSelectedCellId: (cellId: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedDistrict: 'Bengaluru Central',
  selectedTimeWindow: 48,
  activeTab: 'map',
  selectedCellId: null,
  setSelectedDistrict: (district) => set({ selectedDistrict: district }),
  setSelectedTimeWindow: (hours) => set({ selectedTimeWindow: hours }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedCellId: (cellId) => set({ selectedCellId: cellId })
}));
