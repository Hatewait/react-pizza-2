import React from 'react';
import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
      <h1 className={styles.root}>
        <div> 😕</div>
        <div>Ничего не найдено </div>
        <div className={styles.description}>К сожалению данная страница отстутствует в нашем интернет-магазине </div>
      </h1>

  )
}

export default NotFoundBlock;
