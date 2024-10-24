import "reflect-metadata";
import * as grpc from "@grpc/grpc-js";
import serverGrpc from "./service/middleware/grpc";
import { configs } from "@/data/constants/configs";
import { logger } from "./common/logger";
import { databaseConnect } from "./service/middleware/database";

const bootstrapAsync = async () => {
  const { PORT } = configs;
  try {
    await databaseConnect();
    serverGrpc.bindAsync(`localhost:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
      if (err) {
        logger.error(err);
        return;
      }
      logger.info(`GRPC Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrapAsync();
