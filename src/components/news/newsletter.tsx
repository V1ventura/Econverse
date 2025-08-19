'use client';

import React from 'react';
import styles from './newsletter.module.scss';

export function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles['newsletter-content']}>
        <div className={styles['newsletter-text']}>
          <h1>Inscreva-se na nossa newsletter</h1>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>

        <div className={styles['newsletter-form']}>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <button>INSCREVER</button>
        </div>
      </div>

      <div className={styles['newsletter-terms']}>
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">Aceito os termos e condições</label>
      </div>
    </div>
  );
}