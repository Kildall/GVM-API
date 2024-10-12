export interface BaseGetAllRouteInput {
  skip?: number;
  take?: number;
  orderBy?: {
    [key: string]: "asc" | "desc";
  };
}
