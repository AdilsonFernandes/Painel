import React, { useState } from 'react';
import AdcionarImoveis from './AdcionarImoveis';
import EditarImoveis from './EditarTipos';
import ExcluirImoveis from './ExcluirTipos';


export default function Teste(){

    const [troca, setTroca] = useState();

    return(
        <div className="flex flex-col justify-center items-center mt-5 ">
           <h1 className="flex items-center text-2xl font-bold p-2">Imóveis</h1>

           <div className="flex justify-center items-center mt-5 gap-5">
            <button 
            onClick={() => setTroca(<AdcionarImoveis />)}
            className="bg-blue-600 transition-all p-2 w-36 rounded text-white hover:bg-blue-400 text-lg focus:bg-blue-400">
                Adcionar
            </button>
            <button 
            onClick={() => setTroca(<EditarImoveis/>)}
            className="bg-blue-600 transition-all p-2 w-36  rounded text-white hover:bg-blue-400 text-lg focus:bg-blue-400">
                Editar
            </button>
            <button 
            onClick={() => setTroca(<ExcluirImoveis/>)}
            className="bg-blue-600 transition-all p-2 w-36  rounded text-white hover:bg-blue-400 text-lg focus:bg-blue-400">
                Excluir
            </button>
           </div>

        <div>
            
        </div>
            {troca}
        </div>
    )
}