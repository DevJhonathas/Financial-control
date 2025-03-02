export interface User {
  id: number;
  name:  string;
  balance: number;
  sendPayment():number;
  requestPayment():number;
}