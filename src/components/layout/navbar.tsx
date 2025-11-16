import { Logo } from "@/components/layout/logo";
import { NavigationSheet } from "@/components/layout/navigation-sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background py-4">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="flex items-center gap-3">
          <Button size="lg">Kontak</Button>

          <div>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
