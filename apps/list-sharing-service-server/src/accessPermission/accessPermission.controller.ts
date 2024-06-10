import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccessPermissionService } from "./accessPermission.service";
import { AccessPermissionControllerBase } from "./base/accessPermission.controller.base";

@swagger.ApiTags("accessPermissions")
@common.Controller("accessPermissions")
export class AccessPermissionController extends AccessPermissionControllerBase {
  constructor(
    protected readonly service: AccessPermissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
