import { siX, siVrchat } from 'simple-icons';

function SocialItem({
  href,
  icon,
  label,
  description,
}: {
  href: string;
  icon: string;
  label: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 text-white/80 transition hover:text-white"
    >
      <svg viewBox="0 0 24 24" className="mt-1 h-6 w-6 shrink-0 fill-current" aria-label={label}>
        <path d={icon} />
      </svg>

      <div>
        <div className="font-medium">{label}</div>
        <div className="text-sm text-white/60">{description}</div>
      </div>
    </a>
  );
}

export function SocialLinks() {
  return (
    <section id="social" className="mx-auto max-w-3xl pt-10 pb-5">
      <div className="mx-auto max-w-3xl space-y-6 px-6">
        <h2 className="mb-6 text-2xl font-semibold">Social</h2>

        <div className="space-y-5 pl-10">
          <SocialItem
            href="https://x.com/Ken_Cir"
            icon={siX.path}
            label="X (Twitter)"
            description="日常からVRC関連、日々の開発のことまで色々呟いています"
          />

          <SocialItem
            href="https://vrchat.com/home/user/usr_3974abeb-a05d-4e4b-9d09-0a18729fe908"
            icon={siVrchat.path}
            label="VRChat"
            description="VRChatのアカウント、フレンド申請は一度会った方かお話したことのある方のみ承認しています"
          />
        </div>
      </div>
    </section>
  );
}
