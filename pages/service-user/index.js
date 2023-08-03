import ServiceList from "@/components/serviceTable/serivce-list";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import PageMetadata from "@/components/PageMetadata";

export default function SerivceUserPage() {
  return (
    <>
      <PageMetadata title="Service" />
      <div className="container mx-auto px-32 mt-32 w-[50%] bg-white h-[500px] mx-auto mt-16 shadow-lg border-[3px] border-gray-50 flex items-center justify-center mb-10">
        {/* <div className="container mx-auto px-32 mt-32"> */}
        <ServiceList />
        {/* </div> */}
      </div>
    </>
  );
}
