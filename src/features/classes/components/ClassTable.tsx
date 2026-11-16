
import type { SchoolClass } from "@/features/classes/types/class";

type ClassTableProps = {
  classes: SchoolClass[];
};

export default function ClassTable({
  classes,
}: ClassTableProps) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          <th className="border p-3">Class ID</th>
          <th className="border p-3">Class Name</th>
          <th className="border p-3">Assigned Teacher</th>
        </tr>
      </thead>

      <tbody>
        {classes.map((schoolClass) => (
          <tr key={schoolClass.id}>
            <td className="border p-3">
              {schoolClass.id}
            </td>

            <td className="border p-3">
              {schoolClass.name}
            </td>

            <td className="border p-3">
              {schoolClass.teacher}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
