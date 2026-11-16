import { teachers } from "@/features/teachers/data/teachers";
import type { Teacher } from "@/features/teachers/types/teacher";

export const teacherService = {
  // Retrieve all teachers
  getAllTeachers: (): Teacher[] => {
    return teachers;
  },

  // Retrieve one teacher using their ID
  getTeacherById: (id: number): Teacher | undefined => {
    return teachers.find((teacher) => teacher.id === id);
  },
};
