import { create } from 'zustand';

const useForm = create((set) => ({
  lines: [],
  increasePopulation: () => set((state) => ({ lines: state.lines + 1 })),
  removeAllBears: () => set({ lines: 0 }),
  updateLines: (newLines) => set({ lines: newLines }),
}));

export default useForm;
