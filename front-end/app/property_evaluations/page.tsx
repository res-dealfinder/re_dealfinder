import { columns } from "./columns";
import { Property } from "./type";
import DataTable from "./data-table";

async function getData(): Promise<Property[]> {
  const res = await fetch(
    // "https://674e465f635bad45618e25a7.mockapi.io/api/propeval/prop"
    "http://127.0.0.1:8000/dealfinder/properties/"
  );
  const data = await res.json();
  return data;
}

export default async function PropertyEvaluationsPage() {
  const data: Property[] = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
