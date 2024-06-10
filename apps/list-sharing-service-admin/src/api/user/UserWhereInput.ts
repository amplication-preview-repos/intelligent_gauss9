import { AccessPermissionListRelationFilter } from "../accessPermission/AccessPermissionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListListRelationFilter } from "../list/ListListRelationFilter";

export type UserWhereInput = {
  accessPermissions?: AccessPermissionListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  lists?: ListListRelationFilter;
  username?: StringFilter;
};
