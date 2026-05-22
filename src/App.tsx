
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

// Code splitting: Lazy load route components
const Index = lazy(() => import("./pages/Index"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Methodology = lazy(() => import("./pages/Methodology"));
const Contact = lazy(() => import("./pages/Contact"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const BimboRelationship = lazy(() => import("./pages/BimboRelationship"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-[hsl(var(--pastel-yellow))] flex items-center justify-center">
    <div className="animate-pulse text-center">
      <div className="h-8 w-8 bg-gray-300 rounded-full mx-auto mb-4"></div>
      <p className="text-sm text-gray-600 font-merriweather">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <div className="bg-[hsl(var(--pastel-yellow))] min-h-screen">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:slug" element={<ProjectDetail />} />
                <Route path="/methodology" element={<Methodology />} />
<Route path="/bimbo-relationship" element={<BimboRelationship />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
