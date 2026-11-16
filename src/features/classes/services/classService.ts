
import { classes } from "@/features/classes/data/classes";
import type { SchoolClass } from "@/features/classes/types/class";

export const classService = {
  // Retrieve all classes
  getAllClasses: (): SchoolClass[] => {
    return classes;
  },

  // Retrieve one class using its ID
  getClassById: (id: number): SchoolClass | undefined => {
    return classes.find((schoolClass) => schoolClass.id === id);
  },
};
