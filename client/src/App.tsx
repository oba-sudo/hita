import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Redirect, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Overview from "./pages/Overview";
import Organization from "./pages/Organization";
import Achievements from "./pages/Achievements";
import News from "./pages/News";
import Access from "./pages/Access";
import Contact from "./pages/Contact";
import SponsorLP from "./pages/SponsorLP";
import Privacy from "./pages/Privacy";
import Events from "./pages/Events";
import Tickets from "./pages/Tickets";
import FaqPage from "./pages/FaqPage";
import StarParticles from "./components/StarParticles";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/overview" component={Overview} />
      <Route path="/organization" component={Organization} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/news" component={News} />
      <Route path="/access" component={Access} />
      <Route path="/contact" component={Contact} />
      <Route path="/events" component={Events} />
      <Route path="/tickets" component={Tickets} />
      <Route path="/ticket"><Redirect to="/tickets" /></Route>
      <Route path="/faq" component={FaqPage} />
      <Route path="/nearby-facilities"><Redirect to="/tickets" /></Route>
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
