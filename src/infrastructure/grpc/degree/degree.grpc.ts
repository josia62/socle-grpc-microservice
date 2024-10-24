import type * as grpc from "@grpc/grpc-js";
import type { DegreeRequestDTO } from "@/data/dto/degree/degree-request.dto";
import type { DegreeResponseDTO } from "@/data/dto/degree/degree.response.dto";

export const findDegree = (
  call: grpc.ServerUnaryCall<DegreeRequestDTO, grpc.Metadata>,
  callback: grpc.sendUnaryData<DegreeResponseDTO>,
) => {
  const data = { id: 0, title: "Example", major: "Major" };
  callback(null, data);
};
