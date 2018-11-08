import { Transaction } from "./Transaction";

export class User {
  name: string
  firstName: string
  email: string
  balance: number
  lastTransactions: Array<Transaction>
}
