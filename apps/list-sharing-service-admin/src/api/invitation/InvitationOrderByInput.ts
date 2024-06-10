import { SortOrder } from "../../util/SortOrder";

export type InvitationOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
