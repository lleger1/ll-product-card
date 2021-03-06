import React, { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  //MaxCount
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  //true si counter = maxcount false si counter < maxcount
  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [
    counter,
    maxCount,
  ]);

  return (
    <h1 className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <h1 className={styles.countLabel}> {counter} </h1>

      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </h1>
  );
};
