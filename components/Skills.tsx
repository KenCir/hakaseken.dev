export function Skills() {
  return (
    <section id="skills" className="pt-10 pb-5">
      <div className="mx-auto max-w-3xl px-6 space-y-6">
        <h2 className="text-2xl font-bold">Skills</h2>

        {/* Programming */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Programming Languages</h3>

          <div className="space-y-2">
            <p className="text-sm font-medium">Regularly Used</p>
            <p className="text-muted-foreground">
              JavaScript / TypeScript, Python
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Learning</p>
            <p className="text-muted-foreground">C++, C#, Rust</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Previously Used</p>
            <p className="text-muted-foreground">PHP</p>
          </div>
        </div>

        {/* Frontend */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Frontend</h3>
          <p className="text-muted-foreground leading-relaxed">
            Vue, Next.js, React, Tailwind CSS
          </p>
        </div>

        {/* Backend / Infra */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Backend / Infrastructure</h3>
          <p className="text-muted-foreground leading-relaxed">
            Node.js, Linux, Cloudflare, GitHub Actions
          </p>
        </div>

        {/* Tools */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Tools & Others</h3>
          <p className="text-muted-foreground leading-relaxed">Git, Docker</p>
        </div>
      </div>
    </section>
  );
}
