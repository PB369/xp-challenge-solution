import { EducationalCourseType } from "./educationalCourseType";
import { PortfolioType } from "./portifolioType";

export type UserType = {
  id: string;
  username: string;
  password?: string;
  email: string;
  isFirstAccess: boolean;
  isAuthenticated: boolean;
  experience?: string;
  goal?: string;
  timeOfInvestment?: string;
  profileAssessment?: string;
  monthlyAmount?: string;
  portfolios?: PortfolioType[];
  educationalCourses?: EducationalCourseType[];
};