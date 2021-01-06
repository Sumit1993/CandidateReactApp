export interface Candidate {
  Image: string;
  name: string;
  id: string;
}

/* --- STATE --- */
export interface HomeState {
  candidates: Array<Candidate>;
  shortlist: Array<Candidate>;
  rejected: Array<Candidate>;
  searchText: string;
  loading: boolean;
  error: any;
}

export type ContainerState = HomeState;
