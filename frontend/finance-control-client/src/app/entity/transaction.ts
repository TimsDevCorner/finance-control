export class Transaction {
  public href: String;

  constructor(
    public transactionId: number,
    public userId: number,
    public accountId: number,
    public sourceId: number,
    public amount: number
  ) { }


}
