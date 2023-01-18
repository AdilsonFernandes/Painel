import React, { useState } from 'react';
import AdcionarTipos from './AdcionarTipos';
import EditarTipos from './EditarTipos';
import ExcluirTipos from './ExcluirTipos';

export default function TiposdeImoveis() {

    const [troca, setTroca] = useState();
    return (
        <div className="flex flex-col justify-center items-center mt-5 ">
            <h1 className="flex items-center text-2xl font-bold p-2">Tipos de imóveis</h1>

            <div className="flex justify-center items-center mt-5 gap-5">
                <button
                    onClick={() => setTroca(<AdcionarTipos />)}
                    className="bg-blue-600 transition-all p-2 w-36 rounded text-white hover:bg-blue-400 text-lg">
                    Adcionar
                </button>
                <button
                    onClick={() => setTroca(<EditarTipos />)}
                    className="bg-blue-600 transition-all p-2 w-36 rounded text-white hover:bg-blue-400 text-lg">
                    Editar
                </button>
                <button
                    onClick={() => setTroca(<ExcluirTipos />)}
                    className="bg-blue-600 transition-all p-2 w-36 rounded text-white hover:bg-blue-400 text-lg">
                    Excluir
                </button>
            </div>
            <div>
                {troca}
            </div>
        </div>
    )
}