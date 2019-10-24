export interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  created: Date;
  positionType: string;
  tests?: Array<any>;
}
