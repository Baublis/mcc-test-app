import { Store } from 'redux';
import { Provider } from 'react-redux';
import { FC, PropsWithChildren } from 'react';

export interface StoreProviderProps extends PropsWithChildren {
  store: Store;
}

const StoreProvider: FC<StoreProviderProps> = ({ store, children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
