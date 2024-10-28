import type * as grpc from "@grpc/grpc-js";
import type { UserIdRequestDTO } from "@/data/proto/UserProto/UserIdRequestDTO";
import type { UserResponseDTO } from "@/data/proto/UserProto/UserResponseDTO";

export const getUserById = (
  call: grpc.ServerUnaryCall<UserIdRequestDTO, grpc.Metadata>,
  callback: grpc.sendUnaryData<UserResponseDTO>,
) => {
  const data = {
    email: "john.doe@example.com",
    password: "hashed_password_123",
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  callback(null, data);
};
