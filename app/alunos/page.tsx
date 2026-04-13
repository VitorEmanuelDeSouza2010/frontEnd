import AlunoItem from "@/components/AlunoItem";

export default async function AlunosPage() {
    const alunos = await fetch("http://localhost:8080/alunos").then((res) => res.json());

    console.log(alunos);

    return (
        <div className="w-screen h-screen text-3xl flex flex-col items-center">
            <h1 className="mt-10 mb-50 text-5x1 font-bold">Lista de alunos</h1>

            <div className="w-[90%] h-100 bg-white rounded-md shadow-md shadow-white text-black p-2 overflow-auto">
                <ul className="flex flex-col items-center gap-2">
                    <AlunoItem id={1} nome="////|/|\|\\\\"/>
                    <AlunoItem id={2} nome="|\|/|"/>
                    <AlunoItem id={3} nome="\\\\|/|\|////"/>
                    <AlunoItem id={4} nome="|\|/|"/>
                    <AlunoItem id={5} nome="|/|\|"/>
                    <AlunoItem id={6} nome="|\|/|"/>
                    <AlunoItem id={7} nome="|/|\|"/>
                    <AlunoItem id={8} nome="|\|/|"/>
                    <AlunoItem id={9} nome="|/|\|"/> 
                    <AlunoItem id={10} nome="|\|/|"/>
                    <AlunoItem id={11} nome="|/|\|"/>
                    <AlunoItem id={12} nome="|\|/|"/>
                    <AlunoItem id={13} nome="|/|\|"/>
                    <AlunoItem id={14} nome="/|\|/|\"/>
                    <AlunoItem id={15} nome="///| |\\\"/>
                </ul>
            </div>
        </div>
    );
}

// a div maior tem que ocupar toda a largura e toda a altura da tela
// centralizar tudo na horizontal
// titulo deve ser grande e em negrito e na parte superior da tela
// a div menor deve ser branca, com bordas arredondadas e uma sombra leve
// tudo deve ter um espaçamento interno

