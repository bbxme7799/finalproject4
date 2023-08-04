import ServiceItem from "./service-item";

export default function ServiceList(props) {
  const { items } = props;
  const data = [
    { Name: "John Doe", Email: "john.doe@example.com", Age: 30 },
    { Name: "Jane Doe", Email: "jane.doe@example.com", Age: 25 },
    // more data...
  ];

  return <ServiceItem data={data} />;
}
