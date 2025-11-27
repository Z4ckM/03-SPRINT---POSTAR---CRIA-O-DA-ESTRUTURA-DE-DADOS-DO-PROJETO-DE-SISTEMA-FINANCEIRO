import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { LogOut, Calendar, DollarSign, CheckCircle, AlertCircle, Clock, User } from "lucide-react";
import unidescLogo from "figma:asset/d0d357cc98a3516be618c8cfadb94377f3f80d67.png";
import { Footer } from "./Footer";

interface Installment {
  id: number;
  month: string;
  dueDate: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  paymentDate?: string;
}

export function Dashboard() {
  const navigate = useNavigate();
  const [installments] = useState<Installment[]>([
    { id: 1, month: "Janeiro/2025", dueDate: "05/01/2025", amount: 1200.00, status: "paid", paymentDate: "03/01/2025" },
    { id: 2, month: "Fevereiro/2025", dueDate: "05/02/2025", amount: 1200.00, status: "paid", paymentDate: "04/02/2025" },
    { id: 3, month: "Março/2025", dueDate: "05/03/2025", amount: 1200.00, status: "paid", paymentDate: "05/03/2025" },
    { id: 4, month: "Abril/2025", dueDate: "05/04/2025", amount: 1200.00, status: "paid", paymentDate: "02/04/2025" },
    { id: 5, month: "Maio/2025", dueDate: "05/05/2025", amount: 1200.00, status: "paid", paymentDate: "05/05/2025" },
    { id: 6, month: "Junho/2025", dueDate: "05/06/2025", amount: 1200.00, status: "paid", paymentDate: "04/06/2025" },
    { id: 7, month: "Julho/2025", dueDate: "05/07/2025", amount: 1200.00, status: "paid", paymentDate: "05/07/2025" },
    { id: 8, month: "Agosto/2025", dueDate: "05/08/2025", amount: 1200.00, status: "paid", paymentDate: "01/08/2025" },
    { id: 9, month: "Setembro/2025", dueDate: "05/09/2025", amount: 1200.00, status: "paid", paymentDate: "05/09/2025" },
    { id: 10, month: "Outubro/2025", dueDate: "05/10/2025", amount: 1200.00, status: "paid", paymentDate: "03/10/2025" },
    { id: 11, month: "Novembro/2025", dueDate: "05/11/2025", amount: 1200.00, status: "pending" },
    { id: 12, month: "Dezembro/2025", dueDate: "05/12/2025", amount: 1200.00, status: "pending" },
  ]);

  const handleLogout = () => {
    navigate("/");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Pago
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            <Clock className="w-3 h-3 mr-1" />
            Pendente
          </Badge>
        );
      case "overdue":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <AlertCircle className="w-3 h-3 mr-1" />
            Vencido
          </Badge>
        );
      default:
        return null;
    }
  };

  const paidCount = installments.filter(i => i.status === "paid").length;
  const totalAmount = installments.reduce((sum, i) => sum + i.amount, 0);
  const paidAmount = installments.filter(i => i.status === "paid").reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <img src={unidescLogo} alt="UNIDESC" className="h-12" />
            </div>
            <div>
              <h1 className="text-xl">Portal do Aluno</h1>
              <p className="text-sm text-gray-600">Isaac de Brito Carvalho</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => navigate("/perfil")} variant="outline" className="gap-2">
              <User className="w-4 h-4" />
              Perfil
            </Button>
            <Button onClick={handleLogout} variant="outline" className="gap-2">
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl mb-2">Mensalidades</h2>
          <p className="text-gray-600">Curso: Sistemas de Informação - 2025</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Total do Ano</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">
                {totalAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                12 parcelas de R$ 1.200,00
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Pago</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">
                {paidAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {paidCount} de 12 parcelas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Pendente</CardTitle>
              <Calendar className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">
                {(totalAmount - paidAmount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {12 - paidCount} parcelas restantes
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Histórico de Pagamentos</CardTitle>
            <CardDescription>
              Acompanhe todas as suas mensalidades e pagamentos realizados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Parcela</TableHead>
                  <TableHead>Mês</TableHead>
                  <TableHead>Vencimento</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data Pgto.</TableHead>
                  <TableHead className="text-right">Ação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {installments.map((installment) => (
                  <TableRow key={installment.id}>
                    <TableCell>{installment.id}/12</TableCell>
                    <TableCell>{installment.month}</TableCell>
                    <TableCell>{installment.dueDate}</TableCell>
                    <TableCell>
                      {installment.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </TableCell>
                    <TableCell>{getStatusBadge(installment.status)}</TableCell>
                    <TableCell>
                      {installment.paymentDate || "-"}
                    </TableCell>
                    <TableCell className="text-right">
                      {installment.status === "pending" ? (
                        <Button
                          size="sm"
                          className="bg-indigo-600 hover:bg-indigo-700"
                          onClick={() => navigate("/pagamento", { state: { installment } })}
                        >
                          Pagar
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate("/comprovante", { state: { installment } })}
                        >
                          Comprovante
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
