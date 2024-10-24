import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  DegreesClient as _degreePackage_DegreesClient,
  DegreesDefinition as _degreePackage_DegreesDefinition,
} from "./degreePackage/Degrees";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  degreePackage: {
    Degree: MessageTypeDefinition;
    DegreeId: MessageTypeDefinition;
    Degrees: SubtypeConstructor<typeof grpc.Client, _degreePackage_DegreesClient> & {
      service: _degreePackage_DegreesDefinition;
    };
  };
}
