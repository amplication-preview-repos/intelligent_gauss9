import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type InvitationWhereInput = {
  email?: StringNullableFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
};
