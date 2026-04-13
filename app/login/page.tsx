export default function LoginPage() {
    return (
        <div className="flex flex-col items-center gap-2 mt-35">
            <h1>Login</h1>

            <div className="w-[50%] h-75 bg-white rounded-md flex flex-col items-center gap-2">
                <input className="border-black border-2 bg-white rounded-md mt-15" type="email" placeholder="Email" />
                <input className="border-black border-2 bg-white rounded-md mt-10" type="password" placeholder="Senha" />

                <button className="bg-black rounded-md mt-10 text-emerald-500">Entrar</button>
            </div>
        </div>
    );
}