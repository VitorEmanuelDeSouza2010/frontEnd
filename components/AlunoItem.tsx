"use client";

import Link from "next/link";
import { Trash } from "lucide-react";
import { deleteAluno } from "@/app/alunos/actions";

interface Props {
    id: number;
    nome: string;
}

export default function AlunoItem({ id, nome }: Props) {
    return (
        <div className="flex gap-5">
            <Link href={`/aluno/${id}`}>
                <li className="text-amber-300">{nome}</li>
            </Link>
            <button className="text-red-600 border-black border-2 bg-white rounded-3xl " onClick={() => deleteAluno(id)}>
                <Trash />
            </button>
        </div>
    );
}
