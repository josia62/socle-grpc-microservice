import type { User } from "../../data/do/user.do";
import type { UserRequestDTO } from "../../data/dto/user/user-request.dto";
import type { UserResponseDTO } from "../../data/dto/user/user-response.dto";
import { GenericController } from "@/common/infrastructure/generic.controller";
import type { UserSA } from "@/service/applicatif/user.sa";
import { userSA } from "@/service/applicatif/user.sa";
import type { UserRequestDTO as UserRequest } from "@/data/proto/UserProto/UserRequestDTO";

class UserController extends GenericController<User, UserRequestDTO, UserResponseDTO, UserSA> {
  getUserById = async (id: string) => {
    return await this.serviceSA.findById(id);
  };
  createUser = async (data: any) => {
    await this.serviceSA.create(data);
  };
}

export const userController = new UserController(userSA);
