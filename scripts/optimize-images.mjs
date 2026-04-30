/**
 * Image Optimization Script for ClickLab Marketing
 * 
 * Converts portfolio PNGs/JPGs to optimized WebP format.
 * - Max width: 1200px (images are displayed at ~400px in cards)
 * - Quality: 80% WebP
 * - Originals are backed up to a _backup folder
 */

import sharp from 'sharp';
import { readdir, mkdir, copyFile, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PORTFOLIO_DIR = join(process.cwd(), 'public', 'portfolio');
const BACKUP_DIR = join(PORTFOLIO_DIR, '_originals_backup');
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 80;

async function optimizeImages() {
  console.log('🚀 Starting image optimization...\n');

  // Create backup directory
  await mkdir(BACKUP_DIR, { recursive: true });

  const files = await readdir(PORTFOLIO_DIR);
  const imageFiles = files.filter(f => {
    const ext = extname(f).toLowerCase();
    return ['.png', '.jpg', '.jpeg'].includes(ext) && !f.startsWith('.');
  });

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of imageFiles) {
    const inputPath = join(PORTFOLIO_DIR, file);
    const backupPath = join(BACKUP_DIR, file);
    const outputName = basename(file, extname(file)) + '.webp';
    const outputPath = join(PORTFOLIO_DIR, outputName);

    try {
      // Get original size
      const originalStat = await stat(inputPath);
      const originalSize = originalStat.size;
      totalOriginal += originalSize;

      // Backup original
      await copyFile(inputPath, backupPath);

      // Get image metadata
      const metadata = await sharp(inputPath).metadata();
      const needsResize = metadata.width > MAX_WIDTH;

      // Optimize
      let pipeline = sharp(inputPath);
      
      if (needsResize) {
        pipeline = pipeline.resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside',
        });
      }

      await pipeline
        .webp({ quality: WEBP_QUALITY, effort: 6 })
        .toFile(outputPath);

      // Get optimized size
      const optimizedStat = await stat(outputPath);
      const optimizedSize = optimizedStat.size;
      totalOptimized += optimizedSize;

      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      const originalMB = (originalSize / 1024 / 1024).toFixed(2);
      const optimizedKB = (optimizedSize / 1024).toFixed(0);

      console.log(
        `✅ ${file.padEnd(55)} ${originalMB} MB → ${optimizedKB} KB (${savings}% saved)${needsResize ? ' [resized]' : ''}`
      );
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  }

  console.log('\n' + '═'.repeat(80));
  console.log(`📊 Total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)`);
  console.log(`📁 Originals backed up to: public/portfolio/_originals_backup/`);
  console.log('\n⚠️  Remember to update image references in code from .png/.jpg to .webp');
}

optimizeImages().catch(console.error);
