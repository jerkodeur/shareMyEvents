import { Participation } from '../interfaces/Participation.interface';

export class Participations {
  private participations: Participation[];

  constructor(participations: Participation[]) {
    this.participations = participations;
  }

  getAll(): Participation[] {
    return this.participations;
  }

  addParticipation(participations: Participation): void {
    this.participations.push(participations);
  }

  removeParticipation(participations: Participation): void {
    this.participations = this.participations.filter(
      (item) => item !== participations
    );
  }
}
