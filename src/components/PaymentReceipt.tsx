import { useNavigate, useLocation } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, CheckCircle, Download } from "lucide-react";
import unidescLogo from "figma:asset/d0d357cc98a3516be618c8cfadb94377f3f80d67.png";
import { Separator } from "./ui/separator";
import { Footer } from "./Footer";

export function PaymentReceipt() {
  const navigate = useNavigate();
  const location = useLocation();
  const installment = location.state?.installment;

  if (!installment) {
    navigate("/dashboard");
    return null;
  }

  const studentData = {
    name: "Isaac de Brito Carvalho",
    cpf: "123.456.789-00",
    dateOfBirth: "15/03/2000",
    age: 25,
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <div className="flex-1 p-4">
      <div className="container mx-auto max-w-3xl">
        <Button
          onClick={() => navigate("/dashboard")}
          variant="outline"
          className="mb-4 gap-2 print:hidden"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>

        <Card>
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <img src={unidescLogo} alt="UNIDESC" className="h-16" />
            </div>
            <CardTitle className="text-2xl">Comprovante de Pagamento</CardTitle>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span>Pagamento Confirmado</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm text-gray-500 mb-4">Dados do Aluno</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Nome Completo</p>
                  <p>{studentData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">CPF</p>
                  <p>{studentData.cpf}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Data de Nascimento</p>
                  <p>{studentData.dateOfBirth}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Idade</p>
                  <p>{studentData.age} anos</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm text-gray-500 mb-4">Dados do Pagamento</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Referência</p>
                  <p>{installment.month}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Parcela</p>
                  <p>{installment.id}/12</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Data de Vencimento</p>
                  <p>{installment.dueDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Data do Pagamento</p>
                  <p>{installment.paymentDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Valor Pago</p>
                  <p className="text-green-600">
                    {installment.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Curso</p>
                  <p>Sistemas de Informação - 2025</p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                Este é um comprovante válido de pagamento. Guarde-o para seus registros.
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                Código de autenticação: {Math.random().toString(36).substring(2, 15).toUpperCase()}
              </p>
            </div>

            <div className="flex gap-4 print:hidden">
              <Button onClick={handlePrint} className="w-full gap-2">
                <Download className="w-4 h-4" />
                Baixar/Imprimir
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
}
