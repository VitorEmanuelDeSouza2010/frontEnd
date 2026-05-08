"use client";

import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAluno } from "./actions";
import { PenBox } from "lucide-react";
import Link from "next/link";

export default function AlunosPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);

    useEffect(() => {
        getAluno(Number(id)).then(response => setAluno(response));
    }, [id])

    return (
        <div className="mt-20 flex flex-col items-center">
            <div className="flex bg-white rounded-lg shadow-md shadow-white">
                <Link href={`/aluno/${id}/editar`}>
                    <PenBox className="bg-gray-400 rounded"/>
                </Link>
                <p className="bg-gray-400 border rounded m-5 text-black mt-10 flex flex-col items-center">Nome: {aluno.nome}</p>
                <p className="bg-gray-400 border rounded m-5 ml-6 text-black mt-10 flex flex-col items-center">Idade: {aluno.idade}</p>
            </div>
        </div>
    )
}
