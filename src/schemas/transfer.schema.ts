import { PrimaryGeneratedColumn, Unique } from 'typeorm';

@Unique('idempotency_key_idx', ['idempotencyKey'])
export class TransactionsSchema {
  @PrimaryGeneratedColumn()
  public id: number;

  public fromAccountId: string;

  public toAccountId: string;

  public amount: number;

  public currency: string;

  public status: string;

  public createdAt: Date;

  public idempotencyKey: string;
}
