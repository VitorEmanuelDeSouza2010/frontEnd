
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
    onSend: (email: string, password: string) => Promise<void | string>;
}

export default function LoginForm({onSend}: Props) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit() {
        const response = await onSend(email, password);

        if (response) {
            alert(response);
            return;
        }

        router.push("/");
    }

    return (
        <div className="w-[50%] h-75 bg-white rounded-md shadow-md shadow-white flex flex-col items-center gap-2">
            <input className="border-mauve-500 border-2 bg-mauve-400 rounded-md mt-15"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            
            <input className="border-mauve-500 border-2 bg-mauve-400 rounded-md mt-10"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button className="bg-mauve-500 rounded-md mt-10 text-black"
                onClick={handleSubmit}
            >
                Entrar
            </button>
        </div>
    );
}