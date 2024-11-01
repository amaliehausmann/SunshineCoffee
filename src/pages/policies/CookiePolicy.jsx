import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Policy } from "../../components/Policy/Policy";

export const CookiePolicy = () => {
  const { languageData } = useContext(LanguageContext);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <section>
      {languageData ? (
        <Policy
          titleone="Cookiepolitik"
          subtitle="Om Cookies"
          text="Vores hjemmeside bruger cookies for at forbedre din oplevelse og levere skræddersyede tjenester. En cookie er en lille tekstfil, der gemmes på din enhed, når du besøger en hjemmeside. Cookies hjælper os med at forstå, hvordan du bruger vores hjemmeside, så vi kan forbedre funktionaliteten og din oplevelse."
          subtitletwo="Typer af Cookies Vi Bruger"
          listItemOne="Nødvendige Cookies: Disse er essentielle for, at hjemmesiden fungerer korrekt. De tillader dig at navigere på vores side og bruge dens funktioner."
          listItemTwo="Præstationscookies: Disse cookies hjælper os med at forstå, hvordan besøgende interagerer med vores hjemmeside, ved at indsamle information anonymt for at forbedre brugeroplevelsen."
          listItemThree="Funktionelle Cookies: Disse husker dine præferencer, som f.eks. sprog eller region, for at give en mere personlig oplevelse."
          listItemFour="Marketingcookies: Disse cookies bruges til at vise relevante annoncer for brugere og måle effektiviteten af vores kampagner."
          subtitlethree="Marketingcookies: Disse cookies bruges til at vise relevante annoncer for brugere og måle effektiviteten af vores kampagner."
          texttwo="Du kan vælge at acceptere eller afvise cookies. De fleste webbrowsere accepterer automatisk cookies, men du kan normalt ændre dine browserindstillinger til at afvise cookies, hvis du foretrækker det. Bemærk, at deaktivering af cookies kan påvirke din mulighed for at bruge visse funktioner på vores side."
          subtitleFour="Opdateringer af Denne Politik"
          textthree="Vi kan opdatere vores cookiepolitik lejlighedsvis. Eventuelle ændringer vil blive lagt op på denne side. Vi opfordrer dig til at gennemgå denne politik regelmæssigt."
        />
      ) : (
        <Policy
          titleone="Cookie Policy"
          subtitle="About Cookies"
          text="Our website uses cookies to improve your browsing experience and to provide personalized services. A cookie is a small text file stored on your device when you visit a website. Cookies help us understand how you use our site, which allows us to enhance its functionality and improve your experience."
          subtitletwo="Types of Cookies We Use"
          listItemOne="Necessary Cookies: These are essential for the website to function properly. They allow you to navigate our site and use its features."
          listItemTwo="Performance Cookies: These cookies help us understand how visitors interact with our website, collecting information anonymously to improve user experience."
          listItemThree="Functional Cookies: These remember your preferences, such as language or region, to provide a more personalized experience."
          listItemFour="Marketing Cookies: These cookies are used to display relevant ads to users and to measure the effectiveness of our campaigns."
          subtitlethree="Managing Cookies"
          texttwo="You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. Note that disabling cookies may affect your ability to use certain features of our site."
          subtitleFour="Updates to This Policy"
          textthree="We may update our Cookie Policy occasionally. Any changes will be posted on this page. We encourage you to review this policy regularly."
        />
      )}
    </section>
  );
};
