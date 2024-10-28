import { Payment } from "../../data/do/payment.do";
import type { PaymentRequestDTO } from "../../data/dto/payment/payment-request.dto";
import type { PaymentResponseDTO } from "../../data/dto/payment/payment-response.dto";
import { GenericController } from "@/common/infrastructure/generic.controller";
import type { PaymentSA } from "@/service/applicatif/payment.sa";
import { paymentSA } from "@/service/applicatif/payment.sa";

class PaymentController extends GenericController<Payment, PaymentRequestDTO, PaymentResponseDTO, PaymentSA> {
  getMyCurrent = async (id: string) => {
    return await this.serviceSA.findById(id);
  };
  createPayment = async (data: any) => {
    await this.serviceSA.create(data);
  };
}

export const paymentController = new PaymentController(paymentSA);
