export type User = {
  id: string,
  username: string,
  password: string,
  email: string,
  isFirstAccess: boolean,
  isAuthenticated: boolean,
  experience?: string,
  goal?: string,
  timeOfInvestment?: string,
  initialAmount?: number,
  profileAssessment?: string,
  monthlyAmount?: number,
};