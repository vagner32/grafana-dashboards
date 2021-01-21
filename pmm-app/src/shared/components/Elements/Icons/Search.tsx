/* eslint max-len: 0 */
import React, { FC } from 'react';
import { useTheme } from '@grafana/ui';
import { cx } from 'emotion';
import { getStyles } from './Icons.styles';
import { SvgProps } from './Icons.types';

export const Search: FC<SvgProps> = ({ className, ...rest }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(className, styles.icon)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6803 13.8313C13.8934 13.6158 14 13.3606 14 13.0657C14 12.7651 13.8962 12.51 13.6887 12.3001L10.8029 9.38247C11.4984 8.36738 11.8462 7.23604 11.8462 5.98845C11.8462 5.17751 11.6905 4.40202 11.3792 3.66197C11.0679 2.92192 10.6472 2.28395 10.1172 1.74805C9.58714 1.21215 8.95613 0.786834 8.22416 0.472101C7.49219 0.157367 6.72516 0 5.92308 0C5.121 0 4.35397 0.157367 3.622 0.472101C2.89002 0.786834 2.25901 1.21215 1.72897 1.74805C1.19892 2.28395 0.778245 2.92192 0.466947 3.66197C0.155649 4.40202 0 5.17751 0 5.98845C0 6.79938 0.155649 7.57487 0.466947 8.31492C0.778245 9.05497 1.19892 9.69295 1.72897 10.2288C2.25901 10.7647 2.89002 11.1901 3.622 11.5048C4.35397 11.8195 5.121 11.9769 5.92308 11.9769C7.15705 11.9769 8.27604 11.6253 9.28005 10.9221L12.1659 13.8313C12.3678 14.0468 12.6202 14.1545 12.9231 14.1545C13.2147 14.1545 13.4671 14.0468 13.6803 13.8313ZM8.58589 3.2962C9.32347 4.04192 9.69226 4.93934 9.69226 5.98845C9.69226 7.03756 9.32347 7.93498 8.58589 8.6807C7.84831 9.42643 6.96069 9.79929 5.92303 9.79929C4.88538 9.79929 3.99776 9.42643 3.26018 8.6807C2.5226 7.93498 2.15381 7.03756 2.15381 5.98845C2.15381 4.93934 2.5226 4.04192 3.26018 3.2962C3.99776 2.55047 4.88538 2.17761 5.92303 2.17761C6.96069 2.17761 7.84831 2.55047 8.58589 3.2962Z"
      />
    </svg>
  );
};
