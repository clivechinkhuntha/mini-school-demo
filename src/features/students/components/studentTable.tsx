
import type { Student } from "@/features/students/types/student";
import { getFullName } from "@/features/students/utils/studentUtils";

type StudentTableProps = {
  students: Student[];
};

export default function StudentTable({
  students,
}: StudentTableProps) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          <th className="border p-3">ID</th>
          <th className="border p-3">Full Name</th>
          <th className="border p-3">Age</th>
          <th className="border p-3">Class</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td className="border p-3">{student.id}</td>
            <td className="border p-3">
              {getFullName(student)}
            </td>
            <td className="border p-3">{student.age}</td>
            <td className="border p-3">
              {student.className}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
