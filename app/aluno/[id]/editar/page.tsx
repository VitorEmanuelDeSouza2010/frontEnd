"use client";

import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAluno } from "../actions";

export default function AlunosPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);

    useEffect(() => {
        getAluno(Number(id)).then(response => setAluno(response));
    }, [id])

    function handleChange(value: string, key: keyof Aluno) {
        setAluno(oldState => ({...oldState, [key]: value}))
    }

    return (
        <div className="mt-20 flex flex-col items-center">
            <input value={aluno.nome} onChange={(e) => handleChange(e.target.value, "nome")} className="text-white mt-10 flex flex-col items-center" />
            <input value={aluno.idade} onChange={(e) => handleChange(e.target.value, "idade")} className="text-white mt-10 flex flex-col items-center" />

            <button className="bg-black text-white rounded-x1 px-10 py-2 cursor-pointer hover:opacity-80">Editar</button>
        </div>
    )
}
