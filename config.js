module.exports = {
  BOT_TOKEN: "OTAwODc3OTUzOTA5NTMwNjU0.YXHt-Q.u7QSycasDQi9L9Bz8H0I-D6_99I", // Your discord bot token
  MONGO_CONNECTION: "mongodb+srv://flaing:rollers07@cluster0.4iq0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // URI of the mongo database
  JOIN_LEAVE_WEBHOOK: "https://discord.com/api/webhooks/912117558763733012/5AnBGXfrQs4cK6mf1J4k9_NFJsPEEthjuQr37l12JOEpHzHFxgp07p57kbtz1hM9nkmo", // Webhook to which guild join/leave details will be sent
  OWNER_IDS: "852651552686866482", // Bot owner ID's
  PREFIX: "a!", // Default prefix for the bot
  BOT_INVITE: "https://discord.com/api/oauth2/authorize?client_id=900877953909530654&permissions=8&scope=bot%20applications.commands", // Your bot invite link
  SUPPORT_SERVER: "https://discord.gg/27YY4pJhrV", // Your bot support server
  DASHBOARD: {
    enabled: false, // enable or disable dashboard
    baseURL: "http://localhost:8080", // base url
    failureURL: "http://localhost:8080", // failure redirect url
    secret: "https://discord.com/api/oauth2/authorize?client_id=900877953909530654&redirect_uri=https%3A%2F%2Farcan.discord.com%2Fcallback&response_type=code&scope=identify", // bot secret
    port: "8080", // port to run the bot on
    expressSessionPassword: "discordbot", // random password string
  },
  XP_SYSTEM: {
    COOLDOWN: 5, // Cooldown in seconds between messages
    DEFAULT_LVL_UP_MSG: "{m}, You just advanced to **Level {l}**",
  },
  API: {
    IMAGE_API: "https://discord-js-image-manipulation.herokuapp.com", // Image commands won't work without this
    WEATHERSTACK_KEY: "", // https://weatherstack.com/
  },
  /* Bot Embed Colors */
  EMBED_COLORS: {
    BOT_EMBED: "0x068ADD",
    TRANSPARENT_EMBED: "0x36393F",
    SUCCESS_EMBED: "0x00A56A",
    ERROR_EMBED: "0xD61A3C",
    WARNING_EMBED: "0xF7E919",
  },
  /* Unicode Emojis Used */
  EMOJIS: {
    ARROW: "❯",
    ARROW_BULLET: "»",
    CIRCLE_BULLET: "•",
    CUBE_BULLET: "❒",
    WHITE_DIAMOND_SUIT: "♢",
    TICK: "✓",
    X_MARK: "✕",
    CURRENCY: "₪",
    TICKET_OPEN: "🎫",
    TICKET_CLOSE: "🔒",
  },
  /* Maximum number of keys that can be stored */
  CACHE_SIZE: {
    GUILDS: 10,
    USERS: 1000,
    MEMBERS: 10,
  },
  MESSAGES: {
    API_ERROR: "Unexpected Backend Error! Try again later or contact support server",
  },
};
