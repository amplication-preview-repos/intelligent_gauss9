import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccessPermissionModuleBase } from "./base/accessPermission.module.base";
import { AccessPermissionService } from "./accessPermission.service";
import { AccessPermissionController } from "./accessPermission.controller";
import { AccessPermissionResolver } from "./accessPermission.resolver";

@Module({
  imports: [AccessPermissionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccessPermissionController],
  providers: [AccessPermissionService, AccessPermissionResolver],
  exports: [AccessPermissionService],
})
export class AccessPermissionModule {}
