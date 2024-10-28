import type * as grpc from "@grpc/grpc-js";
import type { UserIdRequestDTO } from "@/data/proto/UserProto/UserIdRequestDTO";
import type { UserResponseDTO } from "@/data/proto/UserProto/UserResponseDTO";
import { userController } from "@/infrastructure/controller/user.controller";

export const getUserById = async (
  call: grpc.ServerUnaryCall<UserIdRequestDTO, grpc.Metadata>,
  callback: grpc.sendUnaryData<UserResponseDTO>,
) => {
  const userId = call?.request?.id || "";
  const response: UserResponseDTO = await userController.getUserById(userId);
  callback(null, response);
};
