export function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="text-muted-foreground mx-auto max-w-3xl space-y-1 px-6 py-10 text-center text-sm">
        <div>© {new Date().getFullYear()} Hakase Ken</div>
        <div>All rights reserved.</div>
      </div>
    </footer>
  );
}
