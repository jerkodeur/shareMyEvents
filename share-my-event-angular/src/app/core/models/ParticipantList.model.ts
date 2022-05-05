import { Participant } from './Participant.model';

export class ParticipantList {
  private participantList: Participant[] = [];

  constructor() {}

  getParticipantList(): Participant[] {
    return this.participantList;
  }

  addParticipant(participant: Participant): void {
    this.participantList.push(participant);
  }

  updateParticipant(participant: Participant): void {
    this.participantList.map((item) => {
      if (participant === item) {
        item = participant;
      }
    });
  }

  removeParticipant(participant: Participant): void {
    this.participantList = this.participantList.filter(
      (item) => item !== participant
    );
  }
}
