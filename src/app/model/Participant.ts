export class Participant {
  id: number;
  firstName: string;
  lastName: string;
  affiliation: string;


  constructor(id: number, firstName: string, lastName: string, affiliation: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.affiliation = affiliation;
  }
}
