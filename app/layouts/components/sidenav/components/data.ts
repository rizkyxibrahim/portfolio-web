import type { MenuItemType } from '~/types/layout'

export const menuItems: MenuItemType[] = [
  {
    key: 'overview-title',
    label: 'Overview',
    isTitle: true,
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'lucide:layout-dashboard',
    url: '/dashboard',
  },
  {
    key: 'profile',
    label: 'Profil',
    icon: 'lucide:user',
    url: '/dashboard/profile',
  },
  {
    key: 'account-title',
    label: 'Akun',
    isTitle: true,
  },
  {
    key: 'logout',
    label: 'Keluar',
    icon: 'lucide:log-out',
    url: '/login',
  },
]
