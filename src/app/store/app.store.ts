export interface AppState {
    data: any;
    loading: boolean;
    error: any;
}

export const initialAppState: AppState = {
    data: null,
    loading: false,
    error: null,
  };