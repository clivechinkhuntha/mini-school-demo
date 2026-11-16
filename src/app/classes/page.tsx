
"use client";

import ClassTable from "@/features/classes/components/ClassTable";
import { useClasses } from "@/features/classes/hooks/useClasses";

export default function ClassesPage() {
  const { classes, loading } = useClasses();

  if (loading) {
    return <p className="p-8">Loading classes...</p>;
  }

  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-bold">
        Mini School Management System
      </h1>

      <h2 className="mb-4 text-xl font-semibold">
        Class Records
      </h2>

      <ClassTable classes={classes} />
    </main>
  );
}
