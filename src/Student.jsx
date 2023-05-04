export const Student = ({ studentData }) => {
  const totalMarks = studentData.reduce((acc, { marks }) => acc + marks, 0);
  const mean = totalMarks / studentData.length;
  return (
    <div>
      <h2>Student Data</h2>
      {mean > 80 ? (
        <p>Mean: {mean}, Certification Approved</p>
      ) : (
        <p>Mean: {mean}, Certification Not Approved</p>
      )}
    </div>
  );
};
