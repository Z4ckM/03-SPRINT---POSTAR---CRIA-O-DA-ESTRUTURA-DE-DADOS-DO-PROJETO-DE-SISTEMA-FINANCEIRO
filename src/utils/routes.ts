import { createBrowserRouter } from "react-router";
import { Login } from "../components/Login";
import { CreateAccount } from "../components/CreateAccount";
import { Dashboard } from "../components/Dashboard";
import { PaymentReceipt } from "../components/PaymentReceipt";
import { PaymentPix } from "../components/PaymentPix";
import { StudentProfile } from "../components/StudentProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/criar-conta",
    Component: CreateAccount,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/comprovante",
    Component: PaymentReceipt,
  },
  {
    path: "/pagamento",
    Component: PaymentPix,
  },
  {
    path: "/perfil",
    Component: StudentProfile,
  },
]);
