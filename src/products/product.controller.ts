import { Controller, Post, Body, Param, Get, Patch } from '@nestjs/common';
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
  getProduct(@Param('id') prodId: string) {
    return this.productService.getSingleProduct(prodId);
  }
  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTtile: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    this.productService.updateProduct(prodId, prodTtile, prodDesc, prodPrice);
    return null;
  }
}
