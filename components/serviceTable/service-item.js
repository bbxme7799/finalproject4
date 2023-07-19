import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CustomerService } from "./CustomerService";
// import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
// import "primereact/resources/primereact.css"; // core css
// import "primeicons/primeicons.css"; // icons

export default function PaginatorBasicDemo() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    CustomerService.getCustomersMedium().then((data) => setCustomers(data));
  }, []);

  return (
    <DataTable
      value={customers}
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      tableStyle={{ minWidth: "65rem" }}
    >
      <Column field="name" header="Name" style={{ width: "25%" }}></Column>
      <Column
        field="country.name"
        header="Country"
        style={{ width: "25%" }}
      ></Column>
      <Column
        field="company"
        header="Company"
        style={{ width: "25%" }}
      ></Column>
      <Column
        field="representative.name"
        header="Representative"
        style={{ width: "25%" }}
      ></Column>
    </DataTable>
  );
}
