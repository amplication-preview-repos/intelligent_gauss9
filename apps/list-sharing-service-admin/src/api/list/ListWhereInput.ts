import { AccessPermissionListRelationFilter } from "../accessPermission/AccessPermissionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListWhereInput = {
  accessPermissions?: AccessPermissionListRelationFilter;
  description?: StringNullableFilter;
  expiresAt?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  privacy?: "Option1";
  user?: UserWhereUniqueInput;
};
