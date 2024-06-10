import { SortOrder } from "../../util/SortOrder";

export type ListOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  privacy?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
