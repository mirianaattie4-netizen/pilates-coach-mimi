import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SessionPage from "./pages/SessionPage";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/a-propos" component={About} />
      <Route path="/galerie" component={Gallery} />
      <Route path="/abonnement" component={Pricing} />
      <Route path="/session/:id" component={SessionPage} />
      <Route path="/session" component={SessionPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
