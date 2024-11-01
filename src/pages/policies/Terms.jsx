import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Policy } from "../../components/Policy/Policy";

export const Terms = () => {
  const { languageData } = useContext(LanguageContext);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <section>
      {languageData ? (
        <Policy
          titleone="Vilkår og Betingelser"
          subtitle="Om Vilkår og Betingelser"
          text="Disse vilkår og betingelser gælder for din brug af vores hjemmeside og de produkter, vi tilbyder. Ved at bruge vores hjemmeside accepterer du disse vilkår."
          subtitletwo="Brugsret"
          listItemOne="1. Du må kun bruge vores hjemmeside til lovlige formål."
          listItemTwo="2. Du må ikke forsøge at ændre, kopiere eller distribuere indholdet på vores hjemmeside uden forudgående skriftlig tilladelse."
          listItemThree="3. Vi forbeholder os retten til at ændre eller fjerne indhold fra hjemmesiden når som helst."
          listItemFour="4. Vi er ikke ansvarlige for eventuelle skader, der måtte opstå som følge af din brug af hjemmesiden."
          subtitlethree="Betaling og Levering"
          texttwo="Alle betalinger skal ske på forhånd, og vi forbeholder os retten til at annullere ordrer, hvis betalingen ikke er gennemført. Leveringstider kan variere."
          subtitleFour="Opdateringer af Denne Politik"
          textthree="Vi kan opdatere vores vilkår og betingelser lejlighedsvis. Eventuelle ændringer vil blive lagt op på denne side. Vi opfordrer dig til at gennemgå disse vilkår regelmæssigt."
        />
      ) : (
        <Policy
          titleone="Terms and Conditions"
          subtitle="About Terms and Conditions"
          text="These terms and conditions apply to your use of our website and the products we offer. By using our website, you agree to these terms."
          subtitletwo="Usage Rights"
          listItemOne="1. You may only use our website for lawful purposes."
          listItemTwo="2. You may not attempt to modify, copy, or distribute content from our website without prior written permission."
          listItemThree="3. We reserve the right to change or remove content from the website at any time."
          listItemFour="4. We are not liable for any damages that may occur as a result of your use of the website."
          subtitlethree="Payment and Delivery"
          texttwo="All payments must be made in advance, and we reserve the right to cancel orders if payment is not completed. Delivery times may vary."
          subtitleFour="Updates to This Policy"
          textthree="We may update our Terms and Conditions occasionally. Any changes will be posted on this page. We encourage you to review these terms regularly."
        />
      )}
    </section>
  );
};
