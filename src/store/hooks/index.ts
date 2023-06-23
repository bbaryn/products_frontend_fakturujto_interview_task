import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../createStore';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
