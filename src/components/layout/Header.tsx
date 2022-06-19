import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "ホーム" },
  { href: "/record", label: "実績" },
  { href: "/skill", label: "スキル" },
  { href: "/blog", label: "ブログ" },
  { href: "/contact", label: "お問い合わせ" },
];

export const Header = () => {
  return (
    <div className="... bg-gradient-to-r from-cyan-300 to-blue-300">
      <div className="flex h-16 justify-between shadow-xl">
        <div className="ml-6 mt-auto mb-auto">
          <h1 className="text-3xl font-bold italic">Warashibe</h1>
        </div>
        <div className="mt-auto mb-auto flex">
          {NAV_ITEMS.map((item) => {
            return (
              <Link key={item.href} href={item.href}>
                <li className="list-none transition ease-in-out hover:scale-125">
                  <a className="mx-4 text-lg ">{item.label}</a>
                </li>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
