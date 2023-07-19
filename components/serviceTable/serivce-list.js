import ServiceItem from "./service-item";

export default function ServiceList(props) {
  const { items } = props;
  const data = [
    { Name: "John Doe", Email: "john.doe@example.com", Age: 30 },
    { Name: "Jane Doe", Email: "jane.doe@example.com", Age: 25 },
    // more data...
  ];

  return (
    <ul>
      {/* {items.map((event) => (
        <ServiceItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))} */}
      <ServiceItem data={data} />
    </ul>
  );
}
