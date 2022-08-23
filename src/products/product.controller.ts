import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { ProductService } from './product.service';
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  addProduct(
    @Body() completeBody: { title: string; description: string; price: number },
    // @Body('title') prodTitle: string,
    // @Body('description') prodDesc: string,
    // @Body('price') prodPrice: number,
  ): any {
    const generatedId = this.productService.insertProduct(
      completeBody.title,
      completeBody.description,
      completeBody.price,
    );
    return { id: generatedId };
  }
  @Get()
  getAllProduct() {
    return this.productService.getProduct();
  }
  @Get(':id')
  getProduct(@Param('id') prodId: string) {}
}
