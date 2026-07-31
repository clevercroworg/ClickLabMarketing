const sharp = require('sharp');
const path = require('path');

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0e1a"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#080b14"/>
    </linearGradient>
    
    <radialGradient id="glow-blue" cx="20%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="glow-cyan" cx="80%" cy="70%" r="60%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="50%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>

    <linearGradient id="card-border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#1e293b" stop-opacity="0.2"/>
    </linearGradient>

    <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>

    <!-- Grid Pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" stroke-width="1" stroke-opacity="0.15"/>
    </pattern>
  </defs>

  <!-- Base Background -->
  <rect width="${width}" height="${height}" fill="url(#bg-grad)"/>

  <!-- Grid overlay -->
  <rect width="${width}" height="${height}" fill="url(#grid)"/>

  <!-- Ambient Glows -->
  <rect width="${width}" height="${height}" fill="url(#glow-blue)"/>
  <rect width="${width}" height="${height}" fill="url(#glow-cyan)"/>

  <!-- Top Accent Light Bar -->
  <rect x="0" y="0" width="${width}" height="4" fill="url(#brand-grad)"/>

  <!-- Glass Container Card -->
  <rect x="80" y="70" width="1040" height="490" rx="24" fill="#0f172a" fill-opacity="0.6" stroke="url(#card-border)" stroke-width="2"/>

  <!-- Top Header / Logo Section -->
  <g transform="translate(130, 130)">
    <!-- Logo Icon Frame -->
    <rect width="64" height="64" rx="16" fill="url(#icon-grad)"/>
    <rect x="3" y="3" width="58" height="58" rx="13" fill="#0b0f19"/>
    
    <!-- Cursor Icon inside Logo -->
    <g transform="translate(17, 14) scale(1.4)">
      <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" fill="#38bdf8" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <!-- Logo Brand Name -->
    <text x="84" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="38" fill="#ffffff" letter-spacing="-0.5">ClickLab <tspan fill="#38bdf8">Marketing</tspan></text>
  </g>

  <!-- Main Headline -->
  <text x="130" y="270" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="48" fill="#ffffff" letter-spacing="-1">
    Premium Digital Agency &amp; Revenue Growth
  </text>

  <!-- Tagline / Subtitle -->
  <text x="130" y="325" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="400" font-size="24" fill="#94a3b8">
    High-ROAS Meta &amp; Google Ads • SEO &amp; Organic Reach • Web Development
  </text>

  <!-- Service Badges / Pills -->
  <g transform="translate(130, 370)">
    <!-- Pill 1: Meta & Google Ads -->
    <g>
      <rect x="0" y="0" width="220" height="46" rx="23" fill="#1e293b" stroke="#3b82f6" stroke-opacity="0.4" stroke-width="1.5"/>
      <circle cx="24" cy="23" r="6" fill="#3b82f6"/>
      <text x="40" y="29" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="16" fill="#f8fafc">Meta &amp; Google Ads</text>
    </g>

    <!-- Pill 2: SEO Growth -->
    <g transform="translate(236, 0)">
      <rect x="0" y="0" width="180" height="46" rx="23" fill="#1e293b" stroke="#06b6d4" stroke-opacity="0.4" stroke-width="1.5"/>
      <circle cx="24" cy="23" r="6" fill="#06b6d4"/>
      <text x="40" y="29" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="16" fill="#f8fafc">SEO Growth</text>
    </g>

    <!-- Pill 3: Web Development -->
    <g transform="translate(432, 0)">
      <rect x="0" y="0" width="210" height="46" rx="23" fill="#1e293b" stroke="#a855f7" stroke-opacity="0.4" stroke-width="1.5"/>
      <circle cx="24" cy="23" r="6" fill="#a855f7"/>
      <text x="40" y="29" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="16" fill="#f8fafc">Web Development</text>
    </g>

    <!-- Pill 4: High ROAS -->
    <g transform="translate(658, 0)">
      <rect x="0" y="0" width="160" height="46" rx="23" fill="#1e293b" stroke="#10b981" stroke-opacity="0.4" stroke-width="1.5"/>
      <circle cx="24" cy="23" r="6" fill="#10b981"/>
      <text x="40" y="29" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="16" fill="#f8fafc">High ROAS</text>
    </g>
  </g>

  <!-- Footer Domain Badge -->
  <g transform="translate(130, 480)">
    <circle cx="10" cy="10" r="5" fill="#10b981"/>
    <text x="24" y="15" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="20" fill="#38bdf8" letter-spacing="0.5">clicklabmarketing.com</text>
  </g>
</svg>
`;

async function generate() {
  const outputPath = path.join(__dirname, '../public/og-image.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(outputPath);
  console.log('Successfully generated public/og-image.png');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
