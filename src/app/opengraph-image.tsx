import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Click Lab Marketing | Premium Digital Agency';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0a0e1a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 50%)',
          padding: '60px 80px',
          boxSizing: 'border-box',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent Top Bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #60a5fa 0%, #38bdf8 50%, #22d3ee 100%)',
          }}
        />

        {/* Card Frame */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            borderRadius: '24px',
            border: '2px solid rgba(56, 189, 248, 0.25)',
            backgroundColor: 'rgba(15, 23, 42, 0.55)',
            zIndex: 1,
          }}
        />

        {/* Main Content inside Card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            zIndex: 10,
          }}
        >
          {/* Brand Header */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                padding: '3px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '11px',
                  backgroundColor: '#0b0f19',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" fill="#38bdf8" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.5px' }}>
              ClickLab <span style={{ color: '#38bdf8' }}>Marketing</span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
            <div
              style={{
                fontSize: '46px',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.15,
                letterSpacing: '-1px',
                marginBottom: '14px',
              }}
            >
              Premium Digital Agency &amp; Revenue Growth
            </div>
            <div
              style={{
                fontSize: '22px',
                color: '#94a3b8',
                fontWeight: 400,
              }}
            >
              High-ROAS Meta &amp; Google Ads • SEO &amp; Organic Reach • Custom Web Development
            </div>
          </div>

          {/* Service Pills & Footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '30px' }}>
            <div style={{ display: 'flex', gap: '14px' }}>
              <div
                style={{
                  padding: '10px 22px',
                  borderRadius: '20px',
                  backgroundColor: '#1e293b',
                  border: '1.5px solid rgba(59, 130, 246, 0.4)',
                  color: '#f8fafc',
                  fontSize: '16px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6', marginRight: '10px' }} />
                Meta &amp; Google Ads
              </div>

              <div
                style={{
                  padding: '10px 22px',
                  borderRadius: '20px',
                  backgroundColor: '#1e293b',
                  border: '1.5px solid rgba(6, 182, 212, 0.4)',
                  color: '#f8fafc',
                  fontSize: '16px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#06b6d4', marginRight: '10px' }} />
                SEO Growth
              </div>

              <div
                style={{
                  padding: '10px 22px',
                  borderRadius: '20px',
                  backgroundColor: '#1e293b',
                  border: '1.5px solid rgba(168, 85, 247, 0.4)',
                  color: '#f8fafc',
                  fontSize: '16px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#a855f7', marginRight: '10px' }} />
                Web Development
              </div>
            </div>

            <div
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', marginRight: '10px' }} />
              clicklabmarketing.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
