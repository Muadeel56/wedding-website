import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
} 