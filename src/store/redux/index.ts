import configureStore, {
  history,
  NextLevelStore as StoreType,
} from './configureStore';

export type NextLevelStore = StoreType;

export { configureStore, history };
