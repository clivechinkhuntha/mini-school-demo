
import { students } from "@/features/students/data/students";
import type { Student } from "@/features/students/types/student";

export const studentService = {
  // Get all students
  getAllStudents: (): Student[] => {
    return students;
  },

  // Get a student by ID
  getStudentById: (id: number): Student | undefined => {
    return students.find((student) => student.id === id);
  },
};
