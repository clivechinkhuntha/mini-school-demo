import type { Teacher } from "@/features/teachers/types/teacher";

type TeacherTableProps = {
  teachers: Teacher[];
};

export default function TeacherTable({ teachers }: TeacherTableProps) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          <th className="border p-3">Teacher ID</th>
          <th className="border p-3">Full Name</th>
          <th className="border p-3">Subject</th>
          <th className="border p-3">Assigned Class</th>
        </tr>
      </thead>

      <tbody>
        {teachers.map((teacher) => (
          <tr key={teacher.id}>
            <td className="border p-3">{teacher.id}</td>
            <td className="border p-3">
              {teacher.firstName} {teacher.lastName}
            </td>
            <td className="border p-3">{teacher.subject}</td>
            <td className="border p-3">{teacher.className}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
