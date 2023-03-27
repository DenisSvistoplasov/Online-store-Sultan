import { useContext } from "react";
import { breakpointContext } from "../context/BreakpointContext";

export const useBreakpoint = () => {
  return useContext(breakpointContext);
};