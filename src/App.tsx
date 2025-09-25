import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";

// Import screens
import { Oversikt } from "@/screens/Oversikt";
import { MinLaering } from "@/screens/MinLaering";
import { TemaDetalj } from "@/screens/TemaDetalj";
import { Quiz } from "@/screens/Quiz";
import { Eksamen } from "@/screens/Eksamen";
import { Resultat } from "@/screens/Resultat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Oversikt />} />
            <Route path="/min-laering" element={<MinLaering />} />
            <Route path="/tema/:slug" element={<TemaDetalj />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/eksamen" element={<Eksamen />} />
            <Route path="/resultat" element={<Resultat />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
