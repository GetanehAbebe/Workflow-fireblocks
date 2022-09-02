export default {
  nodeEnv: process.env.NODE_ENV ?? "devlopement",
  port: process.env.PORT || 8000,
} as const;
