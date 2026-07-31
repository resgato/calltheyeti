import { MetadataRoute } from 'next'

/**
 * Crawler policy.
 *
 * Two things matter here beyond the obvious allow rules:
 *
 * 1. `/_next/` is NOT disallowed. It holds the CSS and JS bundles, and blocking
 *    it stops any renderer from painting the page. Google's own guidance is to
 *    leave static assets crawlable, and AI engines that render JS need them too.
 *
 * 2. Search-time crawlers are listed separately from training crawlers.
 *    OAI-SearchBot is what surfaces pages inside ChatGPT answers and is a
 *    different agent from GPTBot, so allowing only GPTBot would leave the site
 *    out of ChatGPT search results.
 */

// Answer engines: crawl at query time and cite sources. These drive GEO visibility.
const AI_SEARCH_AGENTS = [
  'OAI-SearchBot',      // ChatGPT search results
  'ChatGPT-User',       // ChatGPT user-initiated browsing
  'GPTBot',             // OpenAI index and training
  'PerplexityBot',      // Perplexity index
  'Perplexity-User',    // Perplexity user-initiated fetch
  'ClaudeBot',          // Anthropic crawler
  'Claude-User',        // Claude user-initiated browsing
  'Claude-SearchBot',   // Claude search
  'anthropic-ai',       // legacy Anthropic agent
  'DuckAssistBot',      // DuckDuckGo AI assist
  'MistralAI-User',
  'YouBot',
]

// Model and index builders. Allowing these trades content for future recall.
const AI_TRAINING_AGENTS = [
  'Google-Extended',    // Gemini and AI Overviews grounding
  'Applebot-Extended',  // Apple Intelligence
  'Applebot',           // Siri and Spotlight
  'CCBot',              // Common Crawl, feeds many open models
  'cohere-ai',
  'Meta-ExternalAgent',
  'Amazonbot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      ...[...AI_SEARCH_AGENTS, ...AI_TRAINING_AGENTS].map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/', '/admin/'],
      })),
    ],
    sitemap: 'https://calltheyeti.com/sitemap.xml',
    host: 'https://calltheyeti.com',
  }
}
