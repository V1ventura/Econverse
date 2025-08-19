'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './vitrine.module.scss';
import Link from 'next/link';

interface Produto {
  productName: string;
  photo: string;
  price: number;
}

interface VitrinesProps {
  onProductClick: (product: Produto) => void;
}

const Vitrines = ({ onProductClick }: VitrinesProps) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const vitrineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/produtos.json')
      .then(res => res.json())
      .then(data => setProdutos(data.products))
      .catch(err => console.error('Erro ao carregar produtos:', err));
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (vitrineRef.current) {
      const cardWidth = 320;
      const scrollAmount = cardWidth * 4;
      vitrineRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.container}>
      <img
        src="/imagens/setaesquerda.png"
        alt="Seta Esquerda"
        className={`${styles.seta} ${styles.esquerda}`}
        onClick={() => scroll('left')}
      />

      <div className={styles.vitrineWrapper}>
        <div className={styles.vitrine} ref={vitrineRef}>
          {produtos.map((produto, index) => (
            <div
              className={styles.produtoCard}
              key={index}
              onClick={() => onProductClick(produto)}
              style={{ cursor: 'pointer' }}
            >
              <img src={produto.photo} alt={produto.productName} />
              <h3>{produto.productName}</h3>
              <p className={styles.descricao}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className={styles.precoAntigo}>R$ 30,90</p>
              <p className={styles.precoAtual}>R$ {produto.price.toFixed(2)}</p>
              <p>ou 2x de R$ {(produto.price / 2).toFixed(2)} sem juros</p>

              <Link href="/" className={styles.frete}>
                Frete grátis
              </Link>
            </div>
          ))}
        </div>
      </div>

      <img
        src="/imagens/setadireita.png"
        alt="Seta Direita"
        className={`${styles.seta} ${styles.direita}`}
        onClick={() => scroll('right')}
      />
    </div>
  );
};

export default Vitrines;