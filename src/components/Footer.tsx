import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      
      {/* Subtle glow background */}
      <div className="absolute inset-x-0 -top-32 h-32 bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent mb-4">
              Smart-Java Game
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Platform simulasi interaktif untuk mempersiapkan siswa menghadapi dunia kerja,
              khususnya di bidang hospitality dan kuliner.
            </p>

            <div className="flex gap-4">
              {[
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { label: "Twitter", path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                { label: "Telegram", path: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" },
              ].map((icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all"
                >
                  <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* LINKS */}
          {[
            {
              title: "Produk",
              links: [
                ["Deskripsi", "/about"],
                ["Gameplay", "/gameplay"],
                ["Fitur", "/features"],
                ["Harga", "/pricing"],
              ],
            },
            {
              title: "Perusahaan",
              links: [
                ["Tentang Kami", "/about"],
                ["Tim", "/team"],
                ["Kontak", "/contact"],
                ["Karir", "/careers"],
              ],
            },
            {
              title: "Dukungan",
              links: [
                ["Pusat Bantuan", "/help"],
                ["FAQ", "/faq"],
                ["Privasi", "/privacy"],
                ["Ketentuan", "/terms"],
              ],
            },
          ].map((group, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link[1]}
                      className="text-slate-400 text-sm hover:text-white transition-colors"
                    >
                      {link[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Smart-Java Game. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-slate-500 hover:text-slate-300 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
