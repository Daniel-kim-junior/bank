import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserSchema {
  @PrimaryColumn()
  public userId: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public address: string;

  @Column()
  public phoneNumber: string;
}
