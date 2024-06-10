import { AccessPermissionListRelationFilter } from "../accessPermission/AccessPermissionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvitationListRelationFilter } from "../invitation/InvitationListRelationFilter";

export type GroupWhereInput = {
  accessPermissions?: AccessPermissionListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  invitations?: InvitationListRelationFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
};
