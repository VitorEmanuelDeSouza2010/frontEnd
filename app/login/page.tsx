import LoginForm from "@/components/LoginForm";
import { loginAction } from "./actions";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center gap-2 mt-35">
            <h1>Login</h1>

            <LoginForm onSend={loginAction} />
        </div>
    );
}