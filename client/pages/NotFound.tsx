import { useLocation, Link } from "react-router-dom";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="glass-card max-w-md w-full p-12 text-center animate-slide-up">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-primary/20 p-6">
            <AlertCircle className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="heading-lg text-white mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-2">Page Not Found</p>
        <p className="text-sm text-muted-foreground/70 mb-8">
          The page <span className="text-primary">{location.pathname}</span> doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
