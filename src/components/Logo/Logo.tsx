import React from 'react';
import styles from './logo.sass';
import logoMobile from '../../assets/img/logo/logo_mobile.png';
import logoDesktop from '../../assets/img/logo/logo_desktop.png';
import logoMobileLight from '../../assets/img/logo/logo_mobile_light.png';
import logoDesktopLight from '../../assets/img/logo/logo_desktop_light.png';
import { classnames } from '../../utils/classnames';

export function Logo({ light = false, className = '' }) {
  const mobileImg = light ? logoMobileLight : logoMobile;
  const desktopImg = light ? logoDesktopLight : logoDesktop;
  return (
    <img className={classnames(className, styles.logo)}
      srcSet={mobileImg + ' 97w, ' + desktopImg + ' 156w'}
      sizes='(min-width: 1140px) 156px, 97px'
      src={mobileImg}
      alt="логотип Султан" />
  );
}
