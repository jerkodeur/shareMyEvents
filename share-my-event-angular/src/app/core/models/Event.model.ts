export class Event {
  title: string;
  description: string;
  date: Date;
  address!: string | null;
  ZIPCode!: number | null;
  locality!: string | null;
  additional!: string | null;

  constructor(
    title: string,
    description: string,
    date: Date,
    address: string | null,
    ZIPcode: number | null,
    locality: string | null,
    additional: string | null
  ) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.address = address;
    this.ZIPCode = ZIPcode;
    this.locality = locality;
    this.additional = additional;
  }
}
