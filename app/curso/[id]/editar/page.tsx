"use client";

import { Curso } from "@/interfaces/cursos";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, SubmitEvent } from "react";
import { getCursos, updateCursos } from "../actions";

export default function CursosPage() {
    const { id } = useParams();
    const [curso, setCursos] = useState({} as Curso);
    const router = useRouter();

    useEffect(() => {
        getCursos(Number(id)).then(response => setCursos(response));
    }, [id])

    function handleChange(value: string | number, key: keyof Curso) {
        setCursos(oldState => ({ ...oldState, [key]: value }))
    }

    async function handleUpdate(e: SubmitEvent) {
        e.preventDefault();
        const response = await updateCursos(Number(id), curso);

        if (response) {
            alert(response);
            return;
        }

        router.push(`/curso/${id}`);
    }

    return (
        <form className="mt-20 flex flex-col items-center"
            onSubmit={handleUpdate}>
            <input value={curso.nome} onChange={(e) => handleChange(e.target.value, "nome")} className="text-white mt-10 flex flex-col items-center" />

            <button className="bg-black text-white rounded-x1 px-10 py-2 cursor-pointer hover:opacity-80">Editar</button>
        </form>
    )
}
