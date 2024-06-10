import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type InvitationUpdateInput = {
  email?: string | null;
  group?: GroupWhereUniqueInput | null;
  status?: "Option1" | null;
};
