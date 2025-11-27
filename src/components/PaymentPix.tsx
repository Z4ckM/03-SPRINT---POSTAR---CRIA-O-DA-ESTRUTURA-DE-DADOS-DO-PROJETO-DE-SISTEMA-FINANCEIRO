import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, Copy, CheckCircle } from "lucide-react";
import unidescLogo from "figma:asset/d0d357cc98a3516be618c8cfadb94377f3f80d67.png";
import { Separator } from "./ui/separator";
import QRCode from "react-qr-code";
import { Footer } from "./Footer";

export function PaymentPix() {
  const navigate = useNavigate();
  const location = useLocation();
  const installment = location.state?.installment;
  const [copied, setCopied] = useState(false);

  if (!installment) {
    navigate("/dashboard");
    return null;
  }

  // Gerar código PIX simulado
  const pixCode = `00020126580014BR.GOV.BCB.PIX0136${Math.random().toString(36).substring(2, 38)}52040000530398654${String(installment.amount.toFixed(2)).replace('.', '')}5802BR5925UNIDESC CENTRO UNIVERSITARIO6009SAO PAULO62070503***6304${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

  const handleCopyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmPayment = () => {
    // Simulação de confirmação de pagamento
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <div className="flex-1 p-4">
      <div className="container mx-auto max-w-2xl">
        <Button
          onClick={() => navigate("/dashboard")}
          variant="outline"
          className="mb-4 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>

        <Card>
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <img src={unidescLogo} alt="UNIDESC" className="h-16" />
            </div>
            <CardTitle className="text-2xl">Pagamento via PIX</CardTitle>
            <CardDescription>
              Escaneie o QR Code ou copie o código PIX para realizar o pagamento
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Referência</p>
                  <p>{installment.month}</p>
                </div>
                <div>
                  <p className="text-gray-500">Parcela</p>
                  <p>{installment.id}/12</p>
                </div>
                <div>
                  <p className="text-gray-500">Vencimento</p>
                  <p>{installment.dueDate}</p>
                </div>
                <div>
                  <p className="text-gray-500">Valor</p>
                  <p>
                    {installment.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <QRCode
                  value={pixCode}
                  size={256}
                  level="M"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Abra o app do seu banco e escaneie o QR Code
              </p>
            </div>

            <Separator />

            <div className="space-y-3">
              <p className="text-sm">Ou copie o código PIX:</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={pixCode}
                  readOnly
                  className="flex-1 px-3 py-2 border rounded-md bg-gray-50 text-sm overflow-hidden text-ellipsis"
                />
                <Button onClick={handleCopyPixCode} variant="outline" className="gap-2">
                  {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copiado!" : "Copiar"}
                </Button>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg space-y-2">
              <h4 className="text-sm">Instruções:</h4>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                <li>Abra o aplicativo do seu banco</li>
                <li>Escolha a opção Pix</li>
                <li>Escaneie o QR Code ou cole o código PIX</li>
                <li>Confirme as informações e finalize o pagamento</li>
              </ol>
            </div>

            <Button
              onClick={handleConfirmPayment}
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Já realizei o pagamento
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Após a confirmação do pagamento, o comprovante estará disponível em até 24 horas
            </p>
          </CardContent>
        </Card>
      </div>
      </div>
      <Footer />
    </div>
  );
}
