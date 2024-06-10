import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type InvitationCreateInput = {
  email?: string | null;
  group?: GroupWhereUniqueInput | null;
  status?: "Option1" | null;
};
