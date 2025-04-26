import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class AccountSchema {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @Index('user_id_idx')
  public userId: string;

  @Column()
  @Index('account_number_idx', { unique: true })
  public accountNumber: string;

  @Column()
  public accountType: string;

  @Column()
  public balance: number;

  @Column()
  public currency: string;

  @Column()
  public passowrd: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;
}
