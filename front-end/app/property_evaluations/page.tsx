import { Property, columns } from "./columns";
import { DataTable } from "./data-table";


async function getData(): Promise<Property[]> {
  const res = await fetch(
    "https://674e465f635bad45618e25a7.mockapi.io/api/propeval/prop"
  );
  const data = await res.json();

  return data;
}

export default async function PropertyEvaluationsPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />

    </div>
  );
}
