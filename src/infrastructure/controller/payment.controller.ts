import type { Payment } from "../../data/do/payment.do";
import type { PaymentRequestDTO } from "../../data/dto/payment/payment-request.dto";
import type { PaymentResponseDTO } from "../../data/dto/payment/payment-response.dto";
import { GenericController } from "@/common/infrastructure/generic.controller";
import type { PaymentSA } from "@/service/applicatif/payment.sa";
import { paymentSA } from "@/service/applicatif/payment.sa";
import type { PaymentRequestDTO as Request } from "@/data/proto/PaymentProto/PaymentRequestDTO";

class PaymentController extends GenericController<Payment, PaymentRequestDTO, PaymentResponseDTO, PaymentSA> {
  async makePayment(data: Request) {
    const mockResponse = {
      email: "john.doe@example.com",
      password: "hashed_password_123",
      firstName: "John",
      lastName: "Doe",
      age: 30,
    };
    const deposit = data.deposit || 0;
    const userId = data.userId || "";
    try {
      const response = await this.serviceSA.findOne({ userId: data.userId });
      const newAmount = response?.amount ? response.amount + deposit : deposit;
      response?.id && response.amount && (await this.serviceSA.update(response.id, { amount: newAmount }));
      return {
        ...mockResponse,
        amount: newAmount,
      };
    } catch {
      await this.serviceSA.create({ userId, amount: deposit });
      return {
        ...mockResponse,
        amount: deposit,
      };
    }
  }
}

export const paymentController = new PaymentController(paymentSA);
