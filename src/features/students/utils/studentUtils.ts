
import type { Student } from "@/features/students/types/student";

// Get a student's full name
export function getFullName(student: Student): string {
  return `${student.firstName} ${student.lastName}`;
}

// Check whether a student is 18 or older
export function isAdult(student: Student): boolean {
  return student.age >= 18;
}
