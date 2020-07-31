import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'


function CadastraVideo() {
   return (

      <PageDefault>

         <h1> Cadastro de Vídeo. </h1>

         <Link to="/cadastro/categoria">
            <p> Cadastrar Categoria </p>
         </Link>
      </PageDefault>
   )
}

export default CadastraVideo;