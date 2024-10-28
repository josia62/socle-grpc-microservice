import { GenericSA } from "../../common/service/generic.sa";
import { Payment } from "../../data/do/payment.do";
import type { PaymentRequestDTO } from "../../data/dto/payment/payment-request.dto";
import type { PaymentResponseDTO } from "../../data/dto/payment/payment-response.dto";
import type { PaymentSM } from "../metier/payment.sm";
import { paymentSM } from "../metier/payment.sm";
import type { PaymentFactory } from "../../constraint/factory/payment.factory";
import { paymentFactory } from "../../constraint/factory/payment.factory";

export class PaymentSA extends GenericSA<Payment, PaymentRequestDTO, PaymentResponseDTO, PaymentSM, PaymentFactory> {
  async getUserById(userId: string) {
    return this.serviceSM.findOne({ id: userId });
  }
}

export const paymentSA = new PaymentSA(paymentSM, paymentFactory, "payment");
