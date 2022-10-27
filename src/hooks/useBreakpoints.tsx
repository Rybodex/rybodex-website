// Functions
import { createContext } from 'react';

// Hooks
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

// Types
import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  breakpoints: any;
}

// Context
// TODO: Add custom type
export const BreakpointsContext = createContext<any>({});

export const BreakpointsProvider = ({ children, breakpoints }: IProps) => {
  return <BreakpointsContext.Provider value={breakpoints}>{children}</BreakpointsContext.Provider>;
};

export function useBreakpoints() {
  return useContext(BreakpointsContext);
}
