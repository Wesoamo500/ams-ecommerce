import { Injectable } from '@nestjs/common';
import { CreateProductDto, File } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ImageService } from '../services/image.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
    private readonly convertImageToBase64: ImageService
  ) {}
  async create(files: File, createProductDto: CreateProductDto) {
    const productImage = await this.convertImageToBase64.convertImageToBase64(
      files.productImage[0].buffer,
      files.productImage[0].mimetype
    );
    const thumbnail1 = await this.convertImageToBase64.convertImageToBase64(
      files.thumbnail1[0].buffer,
      files.thumbnail1[0].mimetype
    );
    const thumbnail2 = await this.convertImageToBase64.convertImageToBase64(
      files.thumbnail2[0].buffer,
      files.thumbnail2[0].mimetype
    );
    const thumbnail3 = await this.convertImageToBase64.convertImageToBase64(
      files.thumbnail3[0].buffer,
      files.thumbnail3[0].mimetype
    );
    const newProduct = this.productsRepository.create({
      ...createProductDto,
      productImage,
      thumbnail1,
      thumbnail2,
      thumbnail3,
    });
    await this.productsRepository.save(newProduct);
    return { success: true, message: 'product added successful' };
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: string) {
    return await this.productsRepository.findOneBy({productId: id});
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
