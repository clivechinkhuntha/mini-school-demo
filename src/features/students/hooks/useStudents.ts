
"use client";

import { useState } from "react";
import { studentService } from "@/features/students/services/studentService";
import type { Student } from "@/features/students/types/student";

export function useStudents() {
  const [students] = useState<Student[]>(() =>
    studentService.getAllStudents()
  );

  return {
    students,
    loading: false,
  };
}
