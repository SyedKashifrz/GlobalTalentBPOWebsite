import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ExecutiveSearch from "./pages/services/ExecutiveSearch";
import TalentAcquisition from "./pages/services/TalentAcquisition";
import GlobalRecruitment from "./pages/services/GlobalRecruitment";
import ContractStaffing from "./pages/services/ContractStaffing";
import HRConsulting from "./pages/services/HRConsulting";
import TalentAnalytics from "./pages/services/TalentAnalytics";
import PayrollManagement from "./pages/services/PayrollManagement";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployerOfRecord from "./pages/services/EmployerOfRecord";
import OutsourcingAccounting from "./pages/services/OutsourcingAccounting";
import GlobalPayrollSoftware from "./pages/GlobalPayrollSoftware";
import ManagedPayrollServices from "./pages/services/ManagedPayrollServices";
import GlobalCoverage from "./pages/GlobalCoverage";
import RemoteTalentSolutions from "./pages/services/RemoteTalentSolutions";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/executive-search" element={<ExecutiveSearch />} />
          <Route path="/services/talent-acquisition" element={<TalentAcquisition />} />
          <Route path="/services/global-recruitment" element={<GlobalRecruitment />} />
          <Route path="/services/contract-staffing" element={<ContractStaffing />} />
          <Route path="/services/hr-consulting" element={<HRConsulting />} />
          <Route path="/services/talent-analytics" element={<TalentAnalytics />} />
          <Route path="/services/payroll-management" element={<PayrollManagement />} />
          <Route path="/services/employer-of-record" element={<EmployerOfRecord />} />
          <Route path="/services/outsourcing-accounting" element={<OutsourcingAccounting />} />
          <Route path="/services/managed-payroll-services" element={<ManagedPayrollServices />} />
          <Route path="/services/remote-talent-solutions" element={<RemoteTalentSolutions />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/payroll-software" element={<GlobalPayrollSoftware />} />
          <Route path="/global-coverage" element={<GlobalCoverage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
