import { Injectable } from "@nestjs/common";
import { PrismaService } from "apps/prisma-service/src/prisma.service";
import { UserDto } from "./user.dto";
import { AtLeast } from "./types";

export type StringFilter<$Model = never> = {
    equals?: string
    in?: string[]
    notIn?: string[]
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringFilter | string
}
export type UserWhereUniqueInput = AtLeast<{
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
}, 'userId'>;

export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
  }



  export type NestedStringFilter = {
    equals?: string
    in?: string[]
    notIn?: string[]
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }


export type IUserRepository = {
  user(userWhereUniqueInput: UserWhereUniqueInput): Promise<UserDto | null>;
}

@Injectable()
export class PrismaUserRepository implements IUserRepository {
    public constructor(private readonly prismaService: PrismaService){}

    public async user(userWhereUniqueInput: UserWhereUniqueInput) {
        const uniqueUser = await this.prismaService.user.findUnique({
            where: userWhereUniqueInput,
        });
        if(uniqueUser === null) {
            return null;
        }

        return UserDto.fromPrismaUser(uniqueUser);

    }

}