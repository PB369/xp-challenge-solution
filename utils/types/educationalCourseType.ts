type EducationalCourseLessonType = {
  lessonName: string,
  lessonDuration: string,
  isFinished: boolean,
  content: string,
}

type EducationalCourseModuleType = {
  moduleId: string,
  moduleDuration: string,
  moduleProgressPercentage: number,
  isFinished: boolean,
  lessons: EducationalCourseLessonType[],
}

export type EducationalCourseType = {
  courseName: string,
  category: string,
  duration: string,
  difficultyLevel: string,
  progressPercentage: number,
  description: string,
  isFinished: boolean,
  modules: EducationalCourseModuleType[] ,
}