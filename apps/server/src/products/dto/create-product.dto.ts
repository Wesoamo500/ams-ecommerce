export class CreateProductDto {
  productId: string;

  company: string;

  title: string;

  description: string;

  tags: string;

  price: number;

  discountPercent: number;

  quantity: number;

  productImage: string;

  thumbnail1: string;

  thumbnail2: string;

  thumbnail3: string;
}

export class File {
  productImage?: Express.Multer.File;
  thumbnail1?: Express.Multer.File;
  thumbnail2?: Express.Multer.File;
  thumbnail3?: Express.Multer.File;
}
