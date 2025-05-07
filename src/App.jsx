import Chatbot from "@/Chatbot";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Chatbot />
    </ThemeProvider>
  );
}

export default App;
