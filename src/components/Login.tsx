import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import unidescLogo from "figma:asset/d0d357cc98a3516be618c8cfadb94377f3f80d67.png";
import { Footer } from "./Footer";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <div className="flex-1 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="mb-2">
            <img src={unidescLogo} alt="UNIDESC" className="h-16" />
          </div>
          <CardTitle className="text-2xl">Portal do Aluno</CardTitle>
          <CardDescription>
            Entre com suas credenciais para acessar o sistema
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu.email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Esqueceu a senha?
              </a>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
              Entrar
            </Button>
            <div className="text-sm text-center text-gray-600">
              Não tem uma conta?{" "}
              <button
                type="button"
                onClick={() => navigate("/criar-conta")}
                className="text-indigo-600 hover:underline"
              >
                Criar conta
              </button>
            </div>
          </CardFooter>
        </form>
      </Card>
      </div>
      <Footer />
    </div>
  );
}
