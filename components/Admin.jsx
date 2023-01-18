import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight, } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from 'react';
import Imoveis from "./Imoveis";
import Inicio from "./Inicio";
import TiposdeImoveis from "./TiposdeImoveis";

export default function Admin() {

    const [troca, setTroca] = useState(<Inicio/>);
    return (
        <div>
            <nav className="flex justify-between p-2 px-5 bg-slate-700 text-white">
                <ul className="flex gap-6">
                    <li>Menu site</li>
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                </ul>
                <div>
                    Admin
                </div>
            </nav>
            <div className="flex h-screen">
                <div className="bg-slate-700 text-white w-1/4  border-2 border-solid">

                    <button
                        onClick={() => setTroca(<Inicio />)}
                        className="flex p-2 gap-2 w-full border-b-2 border-solid hover:bg-slate-500 focus:bg-slate-500">
                        <FontAwesomeIcon icon={faChevronCircleRight}
                            className="w-4"
                        />
                        Inicio
                    </button>
                    <button
                        onClick={() => setTroca(<Imoveis />)}
                        className="flex p-2 gap-2 w-full  border-b-2 border-solid hover:bg-slate-500 focus:bg-slate-500">
                        <FontAwesomeIcon icon={faChevronCircleRight}
                            className="w-4"
                        />
                        Imóveis
                    </button>
                    <button
                        onClick={() => setTroca(
                            <TiposdeImoveis />
                        )}
                        className="flex p-2 gap-2 w-full border-b-2 border-solid hover:bg-slate-500 focus:bg-slate-500">
                        <FontAwesomeIcon icon={faChevronCircleRight}
                            className="w-4"
                        />
                        Tipos de imóveis
                    </button>
                </div>
                <div className="bg-slate-100 w-screen p-5">
                    {troca}
                </div>
            </div>
        </div>
    )
}