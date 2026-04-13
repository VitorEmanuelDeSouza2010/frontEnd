"use client";

import { useParams } from "next/navigation";

export default function AlunosPage() {
    const { id } = useParams();

    return <p className="text-white">{id}</p>
}
