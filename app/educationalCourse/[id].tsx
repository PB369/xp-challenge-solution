import { EducationalCourseType } from "@/utils/types/educationalCourseType";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function EducationalCourse() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const course: EducationalCourseType = JSON.parse(id as string);

  return (
    <></>
  );
}