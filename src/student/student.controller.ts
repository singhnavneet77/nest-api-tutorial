import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UnauthorizedException,
    ValidationPipe,
    UseGuards
  } from '@nestjs/common';
  import { StudentService } from './student.service';
  import { CreateStudentDto } from './dto/create-student.dto';
  import { UpdateStudentDto } from './dto/update-student.dto';
  import { AdminGuard } from 'src/admin/admin.guard';
  
  @Controller('student')
  export class StudentController {
    constructor(private readonly studentService: StudentService) {}
  
    @Post('add')
    @UseGuards(AdminGuard)
    create(@Body(new ValidationPipe()) createStudentDto: CreateStudentDto) {
      try {
        return this.studentService.create(createStudentDto);
      } catch (error) {
        throw new UnauthorizedException();
      }
    }
  
    @Get()
    findAll() {
      return this.studentService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.studentService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
      return this.studentService.update(+id, updateStudentDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.studentService.remove(+id);
    }
  }