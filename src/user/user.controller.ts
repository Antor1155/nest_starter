import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  /*
    GET /user
    GET /user/:id
    POST /user
    PATCH /user/:id
    DELETE /user/:id
 */

    @Get() //user
    findAll(){
        return []
    }

    @Get('/bot') // /user/bot
    findAllBot(){
        return []
    }

    @Get(':id') // /user/:id
    findOne(@Param('id') id: string){
        return {id}
    }
}
