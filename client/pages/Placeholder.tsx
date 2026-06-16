import { useLocation } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { AlertCircle } from "lucide-react";

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.split("/").filter(Boolean)[0] || "page";
  const formattedName = pageName
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <MainLayout currentPath={location.pathname}>
      <div className="flex h-full items-center justify-center p-6">
        <div className="glass-card max-w-md w-full p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-primary/10 p-4">
              <AlertCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="heading-md mb-2">{formattedName}</h2>
          <p className="text-muted-foreground mb-6">
            This page is coming soon. Keep building your knowledge with LifeOS!
          </p>
          <p className="text-xs text-muted-foreground/70">
            Ask me to implement this section if you'd like to build it out.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
