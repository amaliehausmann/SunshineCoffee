import { useContext,useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Policy } from "../../components/Policy/Policy";

export const ReturnPolicy = () => {
  const { languageData } = useContext(LanguageContext);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <section>
      {languageData ? (
        <Policy
          titleone="Returpolitik"
          subtitle="Om Retur"
          text="Vi ønsker, at du er tilfreds med dit køb. Hvis du ikke er tilfreds, kan du returnere varen inden for 30 dage efter modtagelsen for at få refunderet købsprisen."
          subtitletwo="Returprocedure"
          listItemOne="1. Kontakt os: Send os en e-mail med dit ordrenummer og årsagen til returneringen."
          listItemTwo="2. Pak varen: Sørg for, at varen er i sin oprindelige stand og emballage, og inkluder en kopi af din ordrebekræftelse."
          listItemThree="3. Send varen: Brug en trackbar forsendelsesmetode for at sende varen tilbage til os."
          listItemFour="4. Refundering: Når vi modtager og behandler din retur, vil vi refundere beløbet til din oprindelige betalingsmetode."
          subtitlethree="Betingelser for Returnering"
          texttwo="Varen skal være ubrugte og i original emballage. Personlige eller tilpassede varer kan ikke returneres."
          subtitleFour="Opdateringer af Denne Politik"
          textthree="Vi kan opdatere vores returpolitik lejlighedsvis. Eventuelle ændringer vil blive lagt op på denne side. Vi opfordrer dig til at gennemgå denne politik regelmæssigt."
        />
      ) : (
        <Policy
          titleone="Return Policy"
          subtitle="About Returns"
          text="We want you to be satisfied with your purchase. If you are not satisfied, you can return the item within 30 days of receipt for a refund of the purchase price."
          subtitletwo="Return Procedure"
          listItemOne="1. Contact Us: Send us an email with your order number and the reason for the return."
          listItemTwo="2. Package the Item: Ensure the item is in its original condition and packaging, and include a copy of your order confirmation."
          listItemThree="3. Ship the Item: Use a trackable shipping method to send the item back to us."
          listItemFour="4. Refund: Once we receive and process your return, we will refund the amount to your original payment method."
          subtitlethree="Return Conditions"
          texttwo="The item must be unused and in its original packaging. Personalized or custom items cannot be returned."
          subtitleFour="Updates to This Policy"
          textthree="We may update our Return Policy occasionally. Any changes will be posted on this page. We encourage you to review this policy regularly."
        />
      )}
    </section>
  );
};
