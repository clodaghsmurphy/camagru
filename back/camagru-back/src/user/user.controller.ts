/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}
	@Get('/')
	findAll(): string {
		return 'This action returns all users';
	}

	@Post('/create')
	create(): string {
		return this.
}
