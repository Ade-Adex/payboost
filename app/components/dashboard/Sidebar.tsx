import { LayoutGrid, Users, Wallet, Settings } from 'lucide-react';

export default function Sidebar({ role }: { role: 'admin' | 'user' }) {
  const links = [
    { label: 'Overview', icon: LayoutGrid, access: ['admin', 'user'] },
    { label: 'Market', icon: Wallet, access: ['user'] },
    { label: 'Manage Users', icon: Users, access: ['admin'] },
    { label: 'Settings', icon: Settings, access: ['admin', 'user'] },
  ];

  return (
    <aside className="w-64 bg-[#0A0A0A] border-r border-white/5 p-6 flex flex-col">
      <div className="mb-10 text-2xl font-bold font-poppins text-[#32CD32]">PayBoost.</div>
      <nav className="space-y-2">
        {links.filter(l => l.access.includes(role)).map((link) => (
          <div key={link.label} className="flex items-center gap-3 p-3 text-white/60 hover:text-[#32CD32] hover:bg-white/5 rounded-xl cursor-pointer transition-all">
            <link.icon size={20} />
            <span className="text-sm font-medium">{link.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}