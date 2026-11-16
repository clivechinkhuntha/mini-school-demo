
"use client";

import StudentTable from "@/features/students/components/studentTable";
import { useStudents } from "@/features/students/hooks/useStudents";

export default function Home() {
  const { students, loading } = useStudents();

  if (loading) {
    return <p className="p-8">Loading students...</p>;
  }

  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-bold">
        Mini School Management System
      </h1>

      <h2 className="mb-4 text-xl font-semibold">
        Student Records
      </h2>

      <StudentTable students={students} />
    </main>
  );
}
