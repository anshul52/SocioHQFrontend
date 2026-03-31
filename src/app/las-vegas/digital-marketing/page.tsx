import Script from "next/script";
import DigitalMarketingAgencyPage from "@/components/pages/DigitalMarketingAgencyPage";
import {
  lasVegasDigitalMarketingAgencyContent,
  lasVegasDigitalMarketingMetadata,
  lasVegasDigitalMarketingStructuredData,
} from "@/content/digital-marketing-agency";

export const metadata = lasVegasDigitalMarketingMetadata;

const LasVegasDigitalMarketingPage = () => {
  return (
    <>
      {lasVegasDigitalMarketingStructuredData.map((schema, index) => (
        <Script
          key={`las-vegas-digital-marketing-schema-${index}`}
          id={`las-vegas-digital-marketing-schema-${index}`}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </Script>
      ))}
      <DigitalMarketingAgencyPage
        content={lasVegasDigitalMarketingAgencyContent}
      />
    </>
  );
};

export default LasVegasDigitalMarketingPage;
