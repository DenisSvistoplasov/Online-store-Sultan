import { useBreakpoint } from '../../hooks/useBreakpoint';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';


export function Header() {
  return (useBreakpoint() == 'desktop') ? <DesktopHeader /> : <MobileHeader/>;
}





