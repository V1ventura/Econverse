'use client';

import React, { useState } from "react";
import styles from "./productmodal.module.scss";
import type { Produto } from '@/types/produtos';
import Link from 'next/link';

interface Props {
  product: Produto | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: Props) => {
  const [quantidade, setQuantidade] = useState(1);

  if (!product) return null;

  const aumentarQuantidade = () => {
    setQuantidade(prev => prev + 1);
  };

  const diminuirQuantidade = () => {
    setQuantidade(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className={styles.fundoModal}>
      <div className={styles.janelaModal}>
        <button className={styles.botaoFechar} onClick={onClose}>×</button>
        <img
          className={styles.imagemProduto}
          src={product.photo}
          alt={product.productName}
        />
        <div className={styles.infoProduto}>
          <h2 className={styles.nomeProduto}>{product.productName}</h2>
          <h3 className={styles.preco}>R$ {product.price.toFixed(2)}</h3>
          <p className={styles.descricaoProduto}>
            Many desktop publishing packages and web page <br /> editors now many desktop publishing
          </p>
          <a className={styles.linkDetalhes} href="#">
            Veja mais detalhes do produto ›
          </a>

          <div className={styles.linhaInferior}>
            <div className={styles.quantidade}>
              <button onClick={diminuirQuantidade}>-</button>
              <span>{quantidade.toString().padStart(2, '0')}</span>
              <button onClick={aumentarQuantidade}>+</button>
            </div>
            <Link href="/" className={styles.botaoComprar}>
                  COMPRAR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;