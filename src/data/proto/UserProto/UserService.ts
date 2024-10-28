// Original file: src/data/proto/user.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  UserIdRequestDTO as _UserProto_UserIdRequestDTO,
  UserIdRequestDTO__Output as _UserProto_UserIdRequestDTO__Output,
} from "../UserProto/UserIdRequestDTO";
import type {
  UserResponseDTO as _UserProto_UserResponseDTO,
  UserResponseDTO__Output as _UserProto_UserResponseDTO__Output,
} from "../UserProto/UserResponseDTO";

export interface UserServiceClient extends grpc.Client {
  Find(
    argument: _UserProto_UserIdRequestDTO,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_UserProto_UserResponseDTO__Output>,
  ): grpc.ClientUnaryCall;
  Find(
    argument: _UserProto_UserIdRequestDTO,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_UserProto_UserResponseDTO__Output>,
  ): grpc.ClientUnaryCall;
  Find(
    argument: _UserProto_UserIdRequestDTO,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_UserProto_UserResponseDTO__Output>,
  ): grpc.ClientUnaryCall;
  Find(
    argument: _UserProto_UserIdRequestDTO,
    callback: grpc.requestCallback<_UserProto_UserResponseDTO__Output>,
  ): grpc.ClientUnaryCall;
  find(
    argument: _UserProto_UserIdRequestDTO,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_UserProto_UserResponseDTO__Output>,
  ): grpc.ClientUnaryCall;
  find(
    argument: _UserProto_UserIdRequestDTO,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_UserProto_UserResponseDTO__Output>,
  ): grpc.ClientUnaryCall;
  find(
    argument: _UserProto_UserIdRequestDTO,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_UserProto_UserResponseDTO__Output>,
  ): grpc.ClientUnaryCall;
  find(
    argument: _UserProto_UserIdRequestDTO,
    callback: grpc.requestCallback<_UserProto_UserResponseDTO__Output>,
  ): grpc.ClientUnaryCall;
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  Find: grpc.handleUnaryCall<_UserProto_UserIdRequestDTO__Output, _UserProto_UserResponseDTO>;
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  Find: MethodDefinition<
    _UserProto_UserIdRequestDTO,
    _UserProto_UserResponseDTO,
    _UserProto_UserIdRequestDTO__Output,
    _UserProto_UserResponseDTO__Output
  >;
}
