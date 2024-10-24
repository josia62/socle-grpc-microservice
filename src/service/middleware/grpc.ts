import * as grpc from "@grpc/grpc-js";
import { serviceGRPC } from "@/common/service/grpc.service";
import { findDegree } from "@/infrastructure/grpc/degree/degree.grpc";

const serverGrpc = new grpc.Server();
serverGrpc.addService(serviceGRPC.degreeService, {
  Find: findDegree,
});
export default serverGrpc;
