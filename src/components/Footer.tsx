import unidescLogo from "figma:asset/d0d357cc98a3516be618c8cfadb94377f3f80d67.png";

export function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <img src={unidescLogo} alt="UNIDESC" className="h-12 brightness-0 invert" />
          <div className="text-center space-y-2">
            <p className="text-sm">
              <strong>Aviso:</strong> Todos os dados apresentados nesta plataforma são <strong>fictícios</strong> e foram criados com o intuito de exemplificar uma plataforma de faculdade.
            </p>
            <p className="text-xs opacity-90">
              Este é um projeto de demonstração desenvolvido para fins educacionais.
            </p>
          </div>
          <div className="text-xs opacity-75 text-center">
            © 2025 UNIDESC - Centro Universitário. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
