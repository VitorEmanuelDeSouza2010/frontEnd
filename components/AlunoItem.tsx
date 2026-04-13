import Link from "next/link";

interface Props {
    id: number;
    nome: string;
}

export default function AlunoItem({ id, nome }: Props) {
    return (
        <Link href={`/aluno/${id}`}>
        <li className="text-amber-300">{nome}</li>
        </Link>
    );
}