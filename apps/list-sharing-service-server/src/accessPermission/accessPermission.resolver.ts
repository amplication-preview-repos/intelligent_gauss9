import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccessPermissionResolverBase } from "./base/accessPermission.resolver.base";
import { AccessPermission } from "./base/AccessPermission";
import { AccessPermissionService } from "./accessPermission.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccessPermission)
export class AccessPermissionResolver extends AccessPermissionResolverBase {
  constructor(
    protected readonly service: AccessPermissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
