"use client";

import Link from "next/link";
import { Trash } from "lucide-react";
import { deleteCurso } from "@/app/cursos/actions";
import { useRouter } from "next/navigation";

interface Props {
    id: number;
    nome: string;
}

export default function CursoItem({ id, nome }: Props) {
    const router = useRouter();

    function handleDelete() {
        deleteCurso(id);
        router.refresh();
    }

    return (
        <div className="flex gap-5">
            <Link href={`/curso/${id}`}>
                <li className="text-red-600 border-black border-2">{nome}</li>
            </Link>
            <button
            className="text-red-600 border-black border-2 bg-white rounded-3xl "
            onClick={handleDelete}>
                <Trash />
            </button>
        </div>
    );
}