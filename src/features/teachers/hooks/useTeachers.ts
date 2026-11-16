"use client";

import { useState } from "react";
import { teacherService } from "@/features/teachers/services/teacherService";
import type { Teacher } from "@/features/teachers/types/teacher";

export function useTeachers() {
  const [teachers] = useState<Teacher[]>(() =>
    teacherService.getAllTeachers()
  );

  return {
    teachers,
    loading: false,
  };
}
