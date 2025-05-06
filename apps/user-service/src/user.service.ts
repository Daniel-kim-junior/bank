import { PrismaUserRepository } from "./prisma-user.repository";

export class UserService {
    constructor(private readonly prismaRepository: PrismaUserRepository) {}

    public async getUserById(userId: string) {
        const user = await this.prismaRepository.user({ AND: [{userId}] });
        if (user === null) {
            throw new Error(`User with id ${userId} not found`);
        }
        return user;
    }
}