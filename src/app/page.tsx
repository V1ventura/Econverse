'use client';

import { CirculosSection } from '@/components/circulos/circleSection';
import { Parceiro } from "@/components/parceiros/parceiro";
import { Newsletter } from "../components/news/newsletter";
import Footer from '@/widgets/foot/footer';
import IconCard from "@/components/icontecnologia/tecnologia";
import IconCard2 from "@/components/iconmercado/mercado";
import IconCard3 from "@/components/iconbebida/bebida";
import IconCard4 from "@/components/iconferramentas/ferramentas";
import IconCard5 from "@/components/iconsaude/saude";
import IconCard6 from "@/components/iconesporte/esporte";
import IconCard7 from "@/components/iconmoda/moda";
import React, { useEffect, useState } from 'react';
import Vitrines from '@/widgets/vitrine';
import Logo from "./imagens/logo.png";
import ProductModal from "@/components/produtomodal/productmodal";
import type { Produto } from '@/types/produtos'; // Corrija esse import! Nunca use de `.next`

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);

  const handleProductClick = (product: Produto) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <div className="container py-1 flex justify-center gap-6 mx-auto items-center">
        <a href='/'>
          <img src="/imagens/compra.png" alt="compra 100% segura" /></a>
        <a href='/'>
          <img src="/imagens/frete.png" alt="frete grátis acima de R$ 200" /></a>
        <a href='/'>
          <img src="/imagens/parcele.png" alt="Parcele suas compras" /></a>
      </div>

      <hr className="border-t border-[1px] border-[#F0F0F0] w-[1280px] mx-auto" />

      <div className="container py-6 flex justify-between items-center mx-auto">
  {/* Logo */}
  <div className="flex-shrink-0">
    <a href="./app/page">
    <img src="/imagens/Logo.png" alt="logo" width={142} /></a>
  </div>

       {/* Barra de pesquisa */}
<div className="flex items-center bg-[#F6F5F2] rounded-[10px]" style={{ width: '630px', height: '48px' }}>
  <input
    type="search"
    placeholder="O que você está buscando?"
    className="flex-grow bg-transparent text-gray-700 px-4 py-2 focus:outline-none"
    style={{ height: '48px' }}
  />
  <img src="/imagens/lupa.png" alt="Lupa" className="w-6 h-6 mr-4" />
</div>

  {/* Ícones */}
  <div className="flex gap-6">
    <a href='/'>
      <img src="/imagens/Vector.png" alt="Vector" /></a>
    <a href='/'>
      <img src="/imagens/Heart.png" alt="Heart" /></a>
    <a href='/'>
      <img src="/imagens/UserCircle.png" alt="User" /></a>
    <a href='/'>
      <img src="/imagens/ShoppingCart.png" alt="ShoppingCart" /></a>
  </div>
</div>

    <hr className="border-t border-[1px] border-[#F0F0F0] w-[1280px] mx-auto" />

{/* Menu */}
      <ul className="flex justify-center gap-10 border-b border-gray-200 py-4 text-sm font-semibold uppercase text-gray-400">
  <li className="cursor-pointer hover:text-[#3019B2] transition">Todas Categorias</li>
  <li className="cursor-pointer hover:text-[#3019B2] transition">Supermercado</li>
  <li className="cursor-pointer hover:text-[#3019B2] transition">Livros</li>
  <li className="cursor-pointer hover:text-[#3019B2] transition">Moda</li>
  <li className="cursor-pointer hover:text-[#3019B2] transition">Lançamentos</li>
  <li className="cursor-pointer hover:text-[#3019B2] transition ">Ofertas do dia</li>
  <li className="flex items-center gap-1 cursor-pointer hover:text-[#3019B2] transition">
    <img src="/imagens/coroa.png" alt="Coroa" className="w-4 h-4" />
    Assinatura
  </li>
</ul>

{/* Background */}
  <div 
  className="w-full h-[390px] bg-cover bg-center"
  style={{ backgroundImage: "url('/imagens/blackfriday.png')" }}
>
  {/* Conteúdo em cima da imagem */}
  <div className="flex flex-col justify-center h-full pl-16 text-white">
    <h2 className="text-4xl font-bold leading-tight">
      Venha conhecer nossas promoções
    </h2>
    <p className="mt-2 text-xl">
      <span className="text-[#F7CA11] font-bold">50% Off</span> nos produtos
    </p>
    <button className="mt-4 w-[206px] h-[50px] bg-[#F7CA11] text-black font-semibold text-sm  rounded-[10px]">
      Ver produto
    </button>
  </div>
</div>





{/* Quadradinhos */}
<div className="mt-16 flex justify-center items-center gap-14 w-[1160px] mx-auto">


    {/* Tecnologia */}
      <IconCard />
    {/* Fim de Tecnologia */}


  
  {/* Supermercado */}
    <div>
         <IconCard2 />
    </div>
  {/* Fim de Supermercado */}



  {/* Bebidas */}

    <div>
      <IconCard3 />
    </div>
  {/* Fim de Bebidas */}


  {/* Ferramentas */}

    <div>
      <IconCard4 />
    </div>
  {/* Fim de Ferramentas */}

  {/* Saúde */}
    
    <div>
      <IconCard5 />
    </div>

  {/* Fim de Saúde */}



  {/* Esportes */}
    <div>
      <IconCard6 />
    </div>

  {/* Moda */}

      <div>
      <IconCard7 />
    </div>

</div>

     {/* Produtos Relacionados 1 */}
      <div className="mt-30 flex items-center gap-4">
      <hr className="border-t border-[1px] border-[#F0F0F0] w-[360px] mx-auto  " />
      <h1 className="text-3xl  font-bold text-[#3019B2] flex justify-center items-center  ">Produtos relacionados</h1>
      <hr className="border-t border-[1px] border-[#F0F0F0] w-[360px] mx-auto  " />
      </div>


       {/* Menu 2 */}

      <div className="flex justify-center mt-4  hover:text-[#3019B2] transition">
          {['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'].map((item, i) => (
      <div
           key={i}
            className="text-[#3B3B3B] flex items-center justify-center text-[16px] cursor-pointer hover:text-[#3019B2] transition"
              style={{
              width: '214.17px',
              height: '40px',
              border: '1px solid #BDBDBD',
              }}
    >
              {item}
      </div>
              ))}
      </div>

      {/* celulares 1 */}
       <div>
      <Vitrines onProductClick={handleProductClick} />
    </div>

      {/* Parceiros 1*/}
                    <main style={{ display: "flex", gap: "20px", justifyContent: "center", padding: "40px" }}>
      <Parceiro
        image="/imagens/parceiro.png"
        title="Parceiros"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        buttonText="CONFIRA"
      />
      <Parceiro
        image="/imagens/parceiro.png"
        title="Parceiros"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        buttonText="CONFIRA"
      />
    </main>


       {/* Produtos Relacionados 2 */}
     <div className="mt-30 flex items-center gap-4">
      <hr className="border-t border-[1px] border-[#F0F0F0] w-[360px] mx-auto" />
      <h1 className="text-3xl  font-bold text-[#3019B2] flex justify-center items-center">Produtos relacionados</h1>
      <hr className="border-t border-[1px] border-[#F0F0F0] w-[360px] mx-auto" />
      </div>


      {/* celulares 2 */}
    <div>
      <Vitrines onProductClick={handleProductClick} />
    </div>
 
        {/* Parceiros 2*/}
                    <main style={{ display: "flex", gap: "20px", justifyContent: "center", padding: "40px" }}>
      <Parceiro
        image="/imagens/parceiro.png"
        title="Parceiros"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        buttonText="CONFIRA"
      />
      <Parceiro
        image="/imagens/parceiro.png"
        title="Parceiros"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        buttonText="CONFIRA"
      />
    </main>

           {/* Navegue por marcas 1 */}
  
      <div>
              <CirculosSection />
     </div>

       {/* Produtos Relacionados 3 */}
     <div className="mt-30 flex items-center gap-4">
      <hr className="border-t border-[1px] border-[#F0F0F0] w-[360px] mx-auto" />
      <h1 className="text-3xl  font-bold text-[#3019B2] flex justify-center items-center">Produtos relacionados</h1>
      <hr className="border-t border-[1px] border-[#F0F0F0] w-[360px] mx-auto" />
      </div>
          
       {/* 3 celulares */}
       <div>
      <Vitrines onProductClick={handleProductClick} />
    </div>
        

        {/* Newslatter */}
      <div>
              <Newsletter />
      </div>

        {/* Footer */}
      <div>
              <Footer />
      </div>

        {/* Footer 2*/}
      <div className='bg-[#FFFFFF]text-center text-[13px] text-[#3F3F40] h-[46.84px] flex items-center justify-center'>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </div>

     {selectedProduct && (
  <ProductModal
    product={selectedProduct}
    onClose={() => setSelectedProduct(null)}
  />
)}

  </>
  )
}