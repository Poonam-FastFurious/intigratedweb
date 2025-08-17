import { create } from "zustand";
import axios from "axios";
import { Baseurl } from "../Config";

const useWebsiteSettings = create((set) => ({
  products: [],

  settings: null,
  loading: false,
  fetchSettings: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(Baseurl + "website");
      set({ settings: res.data });
    } catch (error) {
      console.error("Failed to fetch website settings:", error);
    } finally {
      set({ loading: false });
    }
  },
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(Baseurl + "product"); // <- replace endpoint if needed
      set({ products: res.data });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useWebsiteSettings;
