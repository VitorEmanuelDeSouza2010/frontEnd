"use client";

import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAluno } from "./actions";

export default function AlunosPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);

    useEffect(() => {
        getAluno(Number(id)).then(response => setAluno(response));
    }, [id])

    return (
        <div className="mt-20 flex flex-col items-center">
            <p className="text-white mt-10 flex flex-col items-center">{aluno.nome}</p>
            <p className="text-white mt-10 flex flex-col items-center">{aluno.idade}</p>
        </div>
    )
}
