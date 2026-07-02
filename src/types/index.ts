export interface PortalSession {
  portalUrl: string;
  mac: string;
  token: string;
  connectedAt: number;
}

export interface Genre {
  id: string;
  title: string;
}

export interface Channel {
  id: string;
  number: string;
  name: string;
  logo: string;
  cmd: string;
  genreId: string;
  hd: boolean;
}

export interface FavoriteChannel {
  id: string;
}

export interface RecentChannel {
  id: string;
  watchedAt: number;
}