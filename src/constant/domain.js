export const LIST_DOMAIN_PRODUCTION = [
  "pitgame.io",
  "pitgame.net",
  "pitgame.org",
  "pitgame.vip",
  "asia1.pitgame.io",
  "asia2.pitgame.io",
  "asia3.pitgame.io",
  "asia4.pitgame.io",
  "asia1.pitgame.org",
  "asia2.pitgame.org",
  "asia3.pitgame.org",
  "pitgame1.vip",
  "pitgame2.games",
  "pitgame3.games",
  "pitgame4.games",
]

export const LIST_DOMAIN_DEV = [
  "deview.ahb8888.jdb-yes.com",
]

export const LIST_DOMAIN = process.env.REACT_APP_NODE_ENV === "production"
  ? LIST_DOMAIN_PRODUCTION
  : LIST_DOMAIN_DEV


