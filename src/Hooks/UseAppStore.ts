import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import store from '../../src/Store';

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Use throughout your AppLayout instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;

// Infer the `RootState` and `AppDispatch` types from the Store itself
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface IAppStore {
  useDispatch: () => AppDispatch;
  useSelector: TypedUseSelectorHook<RootState>;
}

const useStore: () => IAppStore = () => ({
  useSelector: useAppSelector,
  useDispatch: useAppDispatch,
});

export default useStore;
export * from '../../src/Store';
