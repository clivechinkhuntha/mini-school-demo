"use client";

import TeacherTable from "@/features/teachers/components/TeacherTable";
import { useTeachers } from "@/features/teachers/hooks/useTeachers";

export default function TeachersPage() {
  const { teachers, loading } = useTeachers();

  if (loading) {
    return <p className="p-8">Loading teachers...</p>;
  }

  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-bold">
        Mini School Management System
      </h1>

      <h2 className="mb-4 text-xl font-semibold">
        Teacher Records
      </h2>

      <TeacherTable teachers={teachers} />
    </main>
  );
}
