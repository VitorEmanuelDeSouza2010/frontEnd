"use client";

import Link from "next/link";
import { Trash } from "lucide-react";
import { deleteAluno } from "@/app/alunos/actions";
import { useRouter } from "next/navigation";

interface Props {
    id: number;
    nome: string;
}

export default function AlunoItem({ id, nome }: Props) {
    const router = useRouter();

    function handleDelete() {
        deleteAluno(id);
        router.refresh();
    }

    return (
        <div className="flex gap-5">
            <Link href={`/aluno/${id}`}>
                <li className="text-amber-300">{nome}</li>
            </Link>
            <button
            className="text-red-600 border-black border-2 bg-white rounded-3xl "
            onClick={handleDelete}>
                <Trash />
            </button>
        </div>
    );
}
