export default function AlunosPage() {
    return (
        <div className="w-screen h-screen text-3xl flex flex-col items-center">
            <h1 className="mt-10 mb-50 text-5x1 font-bold">Lista de alunos</h1>

            <div className="w-[90%] h-100 bg-white rounded-md shadow-md shadow-white text-black p-2 overflow-auto">
                <ul className="flex flex-col items-center gap-2">
                    <li className="text-amber-300">Zenin</li>
                    <li className="text-red-900">Vaper</li>
                    <li className="text-amber-500">Hiro</li>
                    <li className="text-red-600">Z-Chara</li>
                    <li className="text-emerald-600">Abbie</li>
                    <li className="text-lime-500">Jade</li>
                    <li className="text-cyan-200">Engel</li>
                    <li className="text-blue-700">Thomas</li>
                    <li className="text-blue-200">Nicole</li>
                    <li className="text-indigo-600">Shen</li>
                    <li className="text-red-950">Wise</li>
                    <li className="text-gray-600">Rony</li>
                    <li className="text-amber-800">Winfrey</li>
                    <li className="text-fuchsia-800">Valentine</li>
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

