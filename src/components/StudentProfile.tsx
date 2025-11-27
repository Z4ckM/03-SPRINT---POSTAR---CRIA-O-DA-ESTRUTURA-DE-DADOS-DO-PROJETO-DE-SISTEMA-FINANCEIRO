import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, User, Calendar, GraduationCap, Hash, BookOpen } from "lucide-react";
import unidescLogo from "figma:asset/d0d357cc98a3516be618c8cfadb94377f3f80d67.png";
import { Separator } from "./ui/separator";
import { Footer } from "./Footer";

export function StudentProfile() {
  const navigate = useNavigate();

  const studentData = {
    name: "Isaac de Brito Carvalho",
    age: 20,
    dateOfBirth: "05/04/2005",
    course: "Sistemas de Informação",
    registrationNumber: "2022010345",
    semester: "6° Semestre",
    email: "isaac.carvalho@aluno.unidesc.edu.br",
    phone: "(11) 98765-4321",
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <div className="flex-1">
        <header className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={unidescLogo} alt="UNIDESC" className="h-12" />
              <div>
                <h1 className="text-xl">Portal do Aluno</h1>
                <p className="text-sm text-gray-600">Informações da Matrícula</p>
              </div>
            </div>
            <Button onClick={() => navigate("/dashboard")} variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-2xl">Dados da Matrícula</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="w-4 h-4" />
                  Informações Pessoais
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                  <div>
                    <p className="text-sm text-gray-500">Nome Completo</p>
                    <p>{studentData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Idade</p>
                    <p>{studentData.age} anos</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Data de Nascimento</p>
                    <p>{studentData.dateOfBirth}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-sm">{studentData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefone</p>
                    <p>{studentData.phone}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-sm text-gray-500">
                  <GraduationCap className="w-4 h-4" />
                  Informações Acadêmicas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                  <div>
                    <p className="text-sm text-gray-500">Curso</p>
                    <p>{studentData.course}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Número de Matrícula</p>
                    <p className="font-mono">{studentData.registrationNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Semestre Atual</p>
                    <p>{studentData.semester}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Situação</p>
                    <p className="text-green-600">Ativo</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  Estas informações são confidenciais e de uso exclusivo do aluno.
                </p>
              </div>

              <Button
                onClick={() => navigate("/dashboard")}
                className="w-full bg-indigo-600 hover:bg-indigo-700 gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o Dashboard
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
      <Footer />
    </div>
  );
}
