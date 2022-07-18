export function init() {
  Sentry.init({
    dsn: "https://0545a033682f43cf9b59b8143fbbda34@o135525.ingest.sentry.io/6581657",
    
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}