import { User } from "generated/prisma";
import { Email, UserId } from "./types";
import { asBranded } from '../../../common-types';

export class UserDto {

    private constructor(private readonly name: string,
        private readonly userId: UserId,
        private readonly email: Email,
        private readonly address: string,
        private readonly phoneNumber: string
    ) {

    }

    public static fromPrismaUser(prismaUser: User): UserDto {
        const {name, userId, email, address, phoneNumber} = prismaUser;
        const user = new UserDto(name, asBranded(userId), asBranded(email), address, phoneNumber);
        return user;
    }


    public get Name(): string {
        return this.name;
    }

    public get UserId(): string {
        return this.userId;
    }

    public get Email(): string {
        return this.email;
    }

    public get Address(): string {
        return this.address;
    }

    public get PhoneNumber(): string {
        return this.phoneNumber;
    }
}