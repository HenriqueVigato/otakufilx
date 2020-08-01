import React from 'react';
import Menu from '../../components/menu/index'
import dadosIniciais from '../../components/data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import videoURL from '../../components/Carousel/components/VideoCard/index'

function Details() {
   return (
      <div style={{ background: "#141414" }}>
         <Menu />

         <BannerMain
            videoTitle={dadosIniciais.categorias[1].videos[4].titulo}
            url={dadosIniciais.categorias[1].videos[4].url}
         />
         <Footer />
      </div>
   );
}

export default Details;