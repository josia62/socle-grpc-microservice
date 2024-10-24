// Original file: src/data/proto/degree.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Degree as _degreePackage_Degree,
  Degree__Output as _degreePackage_Degree__Output,
} from "../degreePackage/Degree";
import type {
  DegreeId as _degreePackage_DegreeId,
  DegreeId__Output as _degreePackage_DegreeId__Output,
} from "../degreePackage/DegreeId";

export interface DegreesClient extends grpc.Client {
  Find(
    argument: _degreePackage_DegreeId,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_degreePackage_Degree__Output>,
  ): grpc.ClientUnaryCall;
  Find(
    argument: _degreePackage_DegreeId,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_degreePackage_Degree__Output>,
  ): grpc.ClientUnaryCall;
  Find(
    argument: _degreePackage_DegreeId,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_degreePackage_Degree__Output>,
  ): grpc.ClientUnaryCall;
  Find(
    argument: _degreePackage_DegreeId,
    callback: grpc.requestCallback<_degreePackage_Degree__Output>,
  ): grpc.ClientUnaryCall;
  find(
    argument: _degreePackage_DegreeId,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_degreePackage_Degree__Output>,
  ): grpc.ClientUnaryCall;
  find(
    argument: _degreePackage_DegreeId,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_degreePackage_Degree__Output>,
  ): grpc.ClientUnaryCall;
  find(
    argument: _degreePackage_DegreeId,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_degreePackage_Degree__Output>,
  ): grpc.ClientUnaryCall;
  find(
    argument: _degreePackage_DegreeId,
    callback: grpc.requestCallback<_degreePackage_Degree__Output>,
  ): grpc.ClientUnaryCall;
}

export interface DegreesHandlers extends grpc.UntypedServiceImplementation {
  Find: grpc.handleUnaryCall<_degreePackage_DegreeId__Output, _degreePackage_Degree>;
}

export interface DegreesDefinition extends grpc.ServiceDefinition {
  Find: MethodDefinition<
    _degreePackage_DegreeId,
    _degreePackage_Degree,
    _degreePackage_DegreeId__Output,
    _degreePackage_Degree__Output
  >;
}
