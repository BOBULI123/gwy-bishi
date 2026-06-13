import Link from "next/link";
import { BookOpenCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-black text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-card bg-ink text-white">
            <BookOpenCheck className="h-5 w-5" />
          </span>
          公务员笔试模拟题库
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/xingce" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            行测
          </Link>
          <Link href="/shenlun" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            申论
          </Link>
          <Link href="/mock-exam" className={buttonVariants({ variant: "default", size: "sm" })}>
            模考
          </Link>
        </nav>
      </div>
    </header>
  );
}
