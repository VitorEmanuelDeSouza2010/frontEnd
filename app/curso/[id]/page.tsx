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
            <div className="flex gap-1">
                <p className="text-white mt-10 flex flex-col items-center">{curso.nome}</p>
                <Link href={`/curso/${id}/editar`}>
                    <PenBox />
                </Link>
            </div>
        </div>
    )
}