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
                <div className="bg-white rounded-lg shadow-md shadow-white">
                    <div className="m-5">
                        <input value={curso.nome} onChange={(e) => handleChange(e.target.value, "nome")} className="text-black mt-10 flex flex-col items-center border bg-gray-400" />
                        <input value={curso.professor} onChange={(e) => handleChange(e.target.value, "professor")} className="text-black mt-10 flex flex-col items-center border bg-gray-400" />
                        <input value={curso.cargaHoraria} onChange={(e) => handleChange(e.target.value, "cargaHoraria")} className="text-black mt-10 flex flex-col items-center border bg-gray-400" />
                        <input value={curso.descricao} onChange={(e) => handleChange(e.target.value, "descricao")} className="text-black mt-10 flex flex-col items-center border bg-gray-400" />
                    </div>
                </div>

            <button className="bg-white mt-5 rounded-lg shadow-md shadow-white text-black rounded-x1 px-10 py-2 cursor-pointer hover:opacity-80">Editar</button>
        </form>
    )
}
