import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Policy } from "../../components/Policy/Policy";

export const Shipping = () => {
  const { languageData } = useContext(LanguageContext);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <section>
      {languageData ? (
        <Policy
          titleone="Fragt og Levering"
          subtitle="Om Fragt"
          text="Vi stræber efter at levere dine varer så hurtigt som muligt. Leveringstiden afhænger af din placering og den valgte forsendelsesmetode."
          subtitletwo="Leveringsmetoder"
          listItemOne="1. Standardlevering: Levering inden for 3-5 hverdage."
          listItemTwo="2. Hurtig levering: Levering inden for 1-2 hverdage mod et ekstra gebyr."
          listItemThree="3. International levering: Leveringstider varierer afhængigt af destinationen."
          listItemFour="4. Afhentning: Du kan vælge at afhente din ordre i vores butik uden forsendelsesomkostninger."
          subtitlethree="Forsendelsesomkostninger"
          texttwo="Fragtomkostningerne beregnes ved kassen baseret på din placering og den valgte leveringsmetode. Vi tilbyder gratis levering ved køb over et bestemt beløb."
          subtitleFour="Opdateringer af Denne Politik"
          textthree="Vi kan opdatere vores fragt- og leveringspolitik lejlighedsvis. Eventuelle ændringer vil blive lagt op på denne side. Vi opfordrer dig til at gennemgå denne politik regelmæssigt."
        />
      ) : (
        <Policy
          titleone="Shipping and Delivery"
          subtitle="About Shipping"
          text="We strive to deliver your items as quickly as possible. Delivery times depend on your location and the chosen shipping method."
          subtitletwo="Delivery Methods"
          listItemOne="1. Standard Delivery: Delivery within 3-5 business days."
          listItemTwo="2. Express Delivery: Delivery within 1-2 business days for an additional fee."
          listItemThree="3. International Shipping: Delivery times vary depending on the destination."
          listItemFour="4. Pickup: You can choose to pick up your order at our store with no shipping costs."
          subtitlethree="Shipping Costs"
          texttwo="Shipping costs are calculated at checkout based on your location and the selected delivery method. We offer free shipping on orders over a certain amount."
          subtitleFour="Updates to This Policy"
          textthree="We may update our Shipping and Delivery Policy occasionally. Any changes will be posted on this page. We encourage you to review this policy regularly."
        />
      )}
    </section>
  );
};
