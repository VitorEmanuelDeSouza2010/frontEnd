import CursoItem from "@/components/CursoItem";

import { getCursos } from "./actions";
import Link from "next/link";

export default async function CursosPage() {
    const cursos = await getCursos();

    return (
        <div className="w-screen h-screen text-3xl flex flex-col items-center">
            <h1 className="mt-10 mb-50 text-5x1 font-bold">Lista de cursos</h1>

            <div className="w-[90%] h-100 bg-white rounded-md shadow-md shadow-white text-black p-2 overflow-auto">
                <ul className="flex flex-col items-center gap-2">
                    {cursos.map((curso) => (
                        <CursoItem
                        key={curso.id}
                        nome={curso.nome}
                        id={curso.id}
                        />
                    ))}
                </ul>
            </div>

            <Link href="/aluno/cadastro" className="px-5 py-2 bg-white text-black mt-5 rounded-lg">
            CURSOS
            </Link>
        </div>
    );
}