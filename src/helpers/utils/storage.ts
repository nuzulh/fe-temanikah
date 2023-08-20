import { AppState, User } from "../../types";

const STORAGE_KEY = "temanikahApp";
declare type AvailableKeys = keyof AppState | keyof User;

// eslint-disable-next-line
export default {
  get(): Partial<AppState | User> | null {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data);
  },
  set(value: Partial<AppState | User>): void {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(
        this.get()
          ? { ...this.get(), ...value }
          : value
      )
    );
  },
  remove(key: AvailableKeys): void {
    let value = this.get() as any;
    if (!value) return;
    delete value[key.toString()];
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(value)
    );
  },
  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  },
};
