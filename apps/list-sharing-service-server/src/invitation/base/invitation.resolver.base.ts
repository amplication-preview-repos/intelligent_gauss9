/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Invitation } from "./Invitation";
import { InvitationCountArgs } from "./InvitationCountArgs";
import { InvitationFindManyArgs } from "./InvitationFindManyArgs";
import { InvitationFindUniqueArgs } from "./InvitationFindUniqueArgs";
import { CreateInvitationArgs } from "./CreateInvitationArgs";
import { UpdateInvitationArgs } from "./UpdateInvitationArgs";
import { DeleteInvitationArgs } from "./DeleteInvitationArgs";
import { Group } from "../../group/base/Group";
import { InvitationService } from "../invitation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Invitation)
export class InvitationResolverBase {
  constructor(
    protected readonly service: InvitationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "read",
    possession: "any",
  })
  async _invitationsMeta(
    @graphql.Args() args: InvitationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Invitation])
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "read",
    possession: "any",
  })
  async invitations(
    @graphql.Args() args: InvitationFindManyArgs
  ): Promise<Invitation[]> {
    return this.service.invitations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Invitation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "read",
    possession: "own",
  })
  async invitation(
    @graphql.Args() args: InvitationFindUniqueArgs
  ): Promise<Invitation | null> {
    const result = await this.service.invitation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Invitation)
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "create",
    possession: "any",
  })
  async createInvitation(
    @graphql.Args() args: CreateInvitationArgs
  ): Promise<Invitation> {
    return await this.service.createInvitation({
      ...args,
      data: {
        ...args.data,

        group: args.data.group
          ? {
              connect: args.data.group,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Invitation)
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "update",
    possession: "any",
  })
  async updateInvitation(
    @graphql.Args() args: UpdateInvitationArgs
  ): Promise<Invitation | null> {
    try {
      return await this.service.updateInvitation({
        ...args,
        data: {
          ...args.data,

          group: args.data.group
            ? {
                connect: args.data.group,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Invitation)
  @nestAccessControl.UseRoles({
    resource: "Invitation",
    action: "delete",
    possession: "any",
  })
  async deleteInvitation(
    @graphql.Args() args: DeleteInvitationArgs
  ): Promise<Invitation | null> {
    try {
      return await this.service.deleteInvitation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Group, {
    nullable: true,
    name: "group",
  })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "any",
  })
  async getGroup(@graphql.Parent() parent: Invitation): Promise<Group | null> {
    const result = await this.service.getGroup(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
