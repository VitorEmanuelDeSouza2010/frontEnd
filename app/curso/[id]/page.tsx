"use client";

import { Curso } from "@/interfaces/cursos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCursos } from "./actions";
import { PenBox } from "lucide-react";
import Link from "next/link";

export default function CursosPage() {
    const { id } = useParams();
    const [curso, setCurso] = useState({} as Curso);

    useEffect(() => {
        getCursos(Number(id)).then(response => setCurso(response));
    }, [id])

    return (
        <div className="mt-20 flex flex-col items-center">
            <div className="flex gap-1 bg-white rounded-lg shadow-md shadow-white">
                <Link href={`/curso/${id}/editar`}>
                    <PenBox className="bg-gray-400 rounded"/>
                </Link>
                <p className="bg-gray-400 border rounded text-black m-5 mt-10 flex flex-col items-center">Curso: {curso.nome}</p>
            </div>
        </div>
    )
}