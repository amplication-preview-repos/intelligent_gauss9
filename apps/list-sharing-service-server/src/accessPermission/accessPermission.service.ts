import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessPermissionServiceBase } from "./base/accessPermission.service.base";

@Injectable()
export class AccessPermissionService extends AccessPermissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
