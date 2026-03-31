import Script from "next/script";
import DigitalMarketingAgencyPage from "@/components/pages/DigitalMarketingAgencyPage";
import {
  michiganDigitalMarketingAgencyContent,
  michiganDigitalMarketingMetadata,
  michiganDigitalMarketingStructuredData,
} from "@/content/digital-marketing-agency";

export const metadata = michiganDigitalMarketingMetadata;

const MichiganDigitalMarketingPage = () => {
  return (
    <>
      {michiganDigitalMarketingStructuredData.map((schema, index) => (
        <Script
          key={`michigan-digital-marketing-schema-${index}`}
          id={`michigan-digital-marketing-schema-${index}`}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </Script>
      ))}
      <DigitalMarketingAgencyPage
        content={michiganDigitalMarketingAgencyContent}
      />
    </>
  );
};

export default MichiganDigitalMarketingPage;
