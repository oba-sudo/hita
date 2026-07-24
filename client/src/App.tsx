import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Ticket from "./pages/Ticket";
import Access from "./pages/Access";
import Highlights from "./pages/Highlights";
import Restaurants from "./pages/Restaurants";
import Stay from "./pages/Stay";
import Tourism from "./pages/Tourism";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import SponsorLP from "./pages/SponsorLP";
import Privacy from "./pages/Privacy";
import Today from "./pages/Today";
import StarParticles from "./components/StarParticles";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/today" component={Today} />
      <Route path="/about" component={About} />
      <Route path="/ticket" component={Ticket} />
      <Route path="/access" component={Access} />
      <Route path="/highlights" component={Highlights} />
      <Route path="/restaurants" component={Restaurants} />
      <Route path="/stay" component={Stay} />
      <Route path="/tourism" component={Tourism} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/sponsor" component={SponsorLP} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/404" component={NotFound} />
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
          <StarParticles />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
