import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const AppliedJobTable = () => {
  const allAppliedJobs = [1, 2, 3, 4];

  return (
    <div>
      <Table>
        <TableCaption>A List of your applied jobs...</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <span>You have not applied any job yet.</span>
          ) : (
            allAppliedJobs.map((item, index) => (
              <TableRow key={index}>
                <TableCell>17-04-2024</TableCell>
                <TableCell>FrontEnd Developer</TableCell>
                <TableCell>Google</TableCell>
                <TableCell className="text-right">
                  <Badge>
                    Selected
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
