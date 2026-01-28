export function Experience() {
  return (
    <section id="experience" className="pt-10 pb-5">
      <div className="mx-auto max-w-3xl px-6 space-y-10">
        <h2 className="text-2xl font-bold">Experience</h2>

        <div className="space-y-8">
          <div className="space-y-1">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-semibold">2022年4月 - 2025年3月</span>
              <span className="text-muted-foreground">S高等学校 普通科</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {/* ここになんらかの説明 */}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-semibold">2025年10月 - Present</span>
              <span className="text-muted-foreground">ZEN大学</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {/* ここになんらかの説明 */}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-semibold">2021 - Present</span>
              <span className="text-muted-foreground">個人開発</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              DiscordBotからWebサービス、Windowsアプリまで様々なソフトウェアを個人で開発。
              <br />
              主にJavaScript・TypeScript・Pythonなどを使用。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
