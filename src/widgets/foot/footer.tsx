'use client';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="/imagens/logo.png" alt="Econverse Logo" className={styles.logo} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles.social}>
            <img src="/imagens/Instagram.png" alt="Instagram" />
            <img src="/imagens/Facebook.png" alt="Facebook" />
            <img src="/imagens/Linkedin.png" alt="LinkedIn" />
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.column}>
            <h4>Institucional</h4>
            <ul>
              <li>Sobre Nós</li>
              <li>Movimento</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Ajuda</h4>
            <ul>
              <li>Suporte</li>
              <li>Fale Conosco</li>
              <li>Perguntas Frequentes</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Termos</h4>
            <ul>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
              <li>Troca e Devolução</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}