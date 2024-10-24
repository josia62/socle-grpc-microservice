import path from "node:path";
import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import type { ProtoGrpcType } from "@/data/proto/degree";
import * as fs from "node:fs";

const protoDir = path.join("src/data/proto");
const protoFiles = fs
  .readdirSync(protoDir)
  .filter((file) => file.endsWith(".proto"))
  .map((file) => path.join(protoDir, file));
const packageDefinition = protoLoader.loadSync(protoFiles, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

export const serviceGRPC = {
  degreeService: proto.degreePackage.Degrees.service,
};
