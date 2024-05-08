import { Injectable } from '@nestjs/common';
import  sharp from 'sharp';
import { buffer } from 'stream/consumers';

@Injectable()
export class ImageService {
  async convertImageToBase64(buffer: Buffer, mimetype: string): Promise<string> {
    try {
      const optimizedBuffer = await this.optimizeImage(buffer)
      const base64String = Buffer.from(optimizedBuffer).toString('base64');
      return `data:image/${mimetype};base64,${base64String}`;
    } catch (error) {
      console.error('Error converting image to base64:', error);
      throw new Error('Failed to convert image');
    }
  }
  private async optimizeImage(buffer: Buffer): Promise<Buffer> {
    try {
      const image = await sharp(buffer)
        .resize({ width: 800, height: 600, fit: 'inside', withoutEnlargement: true }) 
        .webp({ quality: 80 })
        .png({ progressive: true, compressionLevel: 8 }) 
        .jpeg({ quality: 80 })
        .toBuffer();
      return image;
    } catch (error) {
      console.error('Error optimizing image:', error);
      throw new Error('Failed to optimize image');
    }
  }
}
