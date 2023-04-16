import { useBreakpoint } from '../../hooks/useBreakpoint';
import { MobileFooter } from './MobileFooter';
import { DesktopFooter } from './DesktopFooter';

export function Footer() {
  return (useBreakpoint() === 'desktop') ? <DesktopFooter /> : <MobileFooter />;
}

