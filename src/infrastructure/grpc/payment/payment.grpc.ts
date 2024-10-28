import type * as grpc from "@grpc/grpc-js";
import type { PaymentRequestDTO } from "@/data/proto/PaymentProto/PaymentRequestDTO";
import type { PaymentResponseDTO } from "@/data/proto/PaymentProto/PaymentResponseDTO";
import { paymentController } from "@/infrastructure/controller/payment.controller";
import type { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { Empty as EmptyValue } from "google-protobuf/google/protobuf/empty_pb";

export const makePayment = async (
  call: grpc.ServerUnaryCall<PaymentRequestDTO, grpc.Metadata>,
  callback: grpc.sendUnaryData<PaymentResponseDTO>,
) => {
  const response = await paymentController.makePayment(call.request);
  callback(null, response);
};
