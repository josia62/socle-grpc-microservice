import type * as grpc from "@grpc/grpc-js";
import type { DegreeId } from "@/data/proto/degreePackage/DegreeId";
import type { Degree } from "@/data/proto/degreePackage/Degree";

export const findDegree = (
  call: grpc.ServerUnaryCall<DegreeId, grpc.Metadata>,
  callback: grpc.sendUnaryData<Degree>,
) => {
  const data = { id: 0, title: "Example", major: "Major" };
  callback(null, data);
};
