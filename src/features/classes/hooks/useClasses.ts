
"use client";

import { useState } from "react";
import { classService } from "@/features/classes/services/classService";
import type { SchoolClass } from "@/features/classes/types/class";

export function useClasses() {
  const [classes] = useState<SchoolClass[]>(() =>
    classService.getAllClasses()
  );

  return {
    classes,
    loading: false,
  };
}
