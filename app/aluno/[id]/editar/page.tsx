"use client";

import { Aluno } from "@/interfaces/alunos";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, SubmitEvent } from "react";
import { getAluno, updateAluno } from "../actions";

export default function AlunosPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);
    const router = useRouter();

    useEffect(() => {
        getAluno(Number(id)).then(response => setAluno(response));
    }, [id])

    function handleChange(value: string | number, key: keyof Aluno) {
        setAluno(oldState => ({ ...oldState, [key]: value }))
    }

    async function handleUpdate(e: SubmitEvent) {
        e.preventDefault();
        const response = await updateAluno(Number(id), aluno);

        if (response) {
            alert(response);
            return;
        }

        router.push(`/aluno/${id}`);
    }

    return (
        <form className="mt-20 flex flex-col items-center"
            onSubmit={handleUpdate}>
            <input value={aluno.nome} onChange={(e) => handleChange(e.target.value, "nome")} className="text-white mt-10 flex flex-col items-center" />
            <input value={aluno.email} onChange={(e) => handleChange(e.target.value, "email")} className="text-white mt-10 flex flex-col items-center" />
            <input value={aluno.idade} onChange={(e) => handleChange(Number(e.target.value), "idade")} className="text-white mt-10 flex flex-col items-center" />
            <input value={aluno.cpf} onChange={(e) => handleChange(Number(e.target.value), "cpf")} className="text-white mt-10 flex flex-col items-center" />

            <button className="bg-black text-white rounded-x1 px-10 py-2 cursor-pointer hover:opacity-80">Editar</button>
        </form>
    )
}
