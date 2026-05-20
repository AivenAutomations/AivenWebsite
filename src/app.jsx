/* global React, ReactDOM, Nav, Footer, HomePage, ProblemPage, SolutionPage, ServicesPage, HowItWorksPage, CaseStudyPage, PackagesPage, WhyAivenPage, FaqPage, ContactPage */
const { useEffect, useState } = React;

function useHashRoute() {
  const get = () => (typeof location !== 'undefined' ? (location.hash || '#/') : '#/');
  const [hash, setHash] = useState(get);
  useEffect(() => {
    const h = () => {
      setHash(get());
      // Scroll the document to top on route change
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    };
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);
  return hash;
}

const PAGES = {
  '#/':             HomePage,
  '#/problem':      ProblemPage,
  '#/solution':     SolutionPage,
  '#/services':     ServicesPage,
  '#/how-it-works': HowItWorksPage,
  '#/case-study':   CaseStudyPage,
  '#/packages':     PackagesPage,
  '#/why-aiven':    WhyAivenPage,
  '#/faq':          FaqPage,
  '#/contact':      ContactPage,
};

// Per-route background theme. Light = sky+aqua wash (image 1);
// Dark = black + teal glow (image 2). Unlisted routes fall back
// to a sensible default that matches the page's existing color
// language.
const THEME_BY_ROUTE = {
  '#/':             'light',  // Home
  '#/problem':      'dark',
  '#/solution':     'light',
  '#/services':     'light',
  '#/how-it-works': 'dark',
  '#/case-study':   'light',
  '#/packages':     'light',
  '#/why-aiven':    'light',
  '#/faq':          'light',
  '#/contact':      'dark',   // Book a Free Audit
};

function App() {
  const route = useHashRoute();
  const Page = PAGES[route] || HomePage;
  // Drive the animated background's palette from the current route.
  useEffect(() => {
    const theme = THEME_BY_ROUTE[route] || 'light';
    document.body.setAttribute('data-theme', theme);
  }, [route]);
  // Page key forces remount on route change so fade-in animation replays.
  return (
    <div className="shell">
      <Nav currentPath={route === '#/' ? '#/' : route} />
      <Page key={route} currentPath={route} />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
