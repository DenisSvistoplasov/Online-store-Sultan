import { useEffect } from "react";

export const useAutoscroll = (container: HTMLElement | null, refs: any[]) => {
  useEffect(() => {
    if (container && container.getBoundingClientRect().bottom < 0) {
      container.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, refs);
};