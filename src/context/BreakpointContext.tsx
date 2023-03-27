import { ReactNode, createContext, useEffect, useState } from "react";
import { breakpoint } from "../types/types";

const BREAKPOINT_MEDIA_QUERY = '(min-width: 1400px)';

export const breakpointContext = createContext('' as breakpoint);

export const BreakpointProvider = ({ children }: { children: ReactNode; }) => {
  const matchMedia = window?.matchMedia(BREAKPOINT_MEDIA_QUERY);
  const getBreakpoint = () => matchMedia?.matches ? 'desktop' : 'mobile';

  const [breakpoint, setBreakpoint] = useState<breakpoint>(getBreakpoint());

  useEffect(() => {
    matchMedia.onchange = () => setBreakpoint(getBreakpoint());
  }, []);

  return (
    <breakpointContext.Provider value={breakpoint}>
      {children}
    </breakpointContext.Provider>
  );
};
