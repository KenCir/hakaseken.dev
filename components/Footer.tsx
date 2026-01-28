export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-10 text-center text-sm text-muted-foreground space-y-1">
        <div>© {new Date().getFullYear()} Hakase Ken</div>
        <div>All rights reserved.</div>
      </div>
    </footer>
  );
}
