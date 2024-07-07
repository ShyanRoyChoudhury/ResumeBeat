'use client';

/* Core */
import { Provider } from 'react-redux';

/* Instruments */
import { webStore } from './web/store';

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={webStore}>{props.children}</Provider>;
};
