import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight, } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from 'react';
import Teste from "./Teste";
import Teste2 from "./Teste2";

export default function Admin() {

    const [troca, setTroca] = useState(0);
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
                <div className="bg-slate-700 text-white w-1/4 pt-4">
                    <button                  
                        onClick={() => setTroca(<Teste/>)}
                        className= "flex p-2 gap-2 w-full hover:bg-slate-500 focus:bg-slate-500">
                        <FontAwesomeIcon icon={faChevronCircleRight}
                            className="w-4"
                        />
                        Teste
                    </button>
                    <button
                        onClick={() => setTroca(
                        <Teste2/> 
                        )}
                        className="flex p-2 gap-2 w-full hover:bg-slate-500 focus:bg-slate-500">
                        <FontAwesomeIcon icon={faChevronCircleRight}
                            className="w-4"
                        />
                        Teste
                    </button>
                </div>
                <div className="bg-slate-100 w-screen p-5">{troca}</div>
            </div>
        </div>
    )
}