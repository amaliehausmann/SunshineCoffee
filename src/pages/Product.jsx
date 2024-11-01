import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { LanguageContext } from "../context/LanguageContext";
import { Button } from "../components/Button/Button";
import { CartContext } from "../context/CartContext";

export const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const {languageData} = useContext(LanguageContext);
  const {addToCart} = useContext(CartContext);

  const translations = [
    {
      id: "1",
      danishDescription: 'Dyrket på de frodige skråninger af Colombias højland leverer Early Bird en jævn og blød oplevelse. Med smag af karamel, honning og subtil citrus inviterer denne kaffe dig til at sætte farten ned og nyde hvert øjeblik. Vores bønner er håndplukkede og soltørrede for at fastholde deres naturlige sødme, hvilket giver en perfekt balance mellem lys syre og en cremet finish.'
    },
    {
      id: "2",
      danishDescription: 'Høstet fra den vulkanske jord i Indonesien, Boldly Go er en rig, fyldig kaffe med dybe jordfarver og strejf af tobak, melasse og mørk kakao. Denne bryg er perfekt til dem, der nyder en robust kop, der bliver hængende i ganen. Ideel til morgenritualer eller kontemplative eftermiddage, Boldly Go vil transportere dig til de rolige øer i Stillehavet med hver tår.'
    },
    {
      id: "3",
      danishDescription: 'La Cabra stammer fra Etiopiens tågede bjerge og fascinerer med sin dristige, men afbalancerede smagsprofil, med noter af mørk chokolade og vilde bær. Hver tår er en rejse gennem tiden, en fejring af kaffens kulturelle betydning i det etiopiske samfund. The Buna er lavet med ærbødighed af vores mesterristere og repræsenterer en harmonisk blanding af tradition og innovation. Fra de solbeskinnede bjergskråninger til de travle markeder i Addis Abeba ærer vi arven fra etiopisk kaffe med hver omhyggeligt udvalgt batch.'
    },
    {
      id: "4",
      danishDescription: 'Et tropisk paradis i en kop, Onyx er en blanding af costaricanske bønner, der kombinerer frugtagtige undertoner med en delikat blomsterafslutning. Noter af saftig mango, lys ananas og duftende jasmin er pakket ind i en medium krop, hvilket skaber en dejlig og forfriskende bryg. Perfekt til varme sommermorgener eller iskaffe-fans, Onyx vil tage dig til Mellemamerikas solrige kyster med hver tår.'
    },
    {
      id: "5",
      danishDescription: 'Fra Sumatras tætte regnskove kommer Devans, en mørkristet kaffe, der er røget og intens. Den har dristige smag af sort peber, nelliker og mørk chokolade, med en sirupsagtig tekstur, der dækker ganen. Denne kaffe er perfekt til dem, der elsker en fed, kompleks kop med en mystisk kant, der tilbyder en rig smag, der bliver hængende længe efter den sidste tår.'
    },
    {
      id: "6",
      danishDescription: 'Start din dag med den lyse og afbalancerede Cultivate. Denne mellemristede kaffe har livlige noter af æble, ristet mandel og et strejf af vanilje. Fremstillet fra små gårde beliggende i det guatemalanske højland, er hver batch ristet ekspert for at bringe det fulde potentiale af disse førsteklasses bønner frem. Perfekt til en nem morgenkop eller en afslappende eftermiddagspause, Culitvate er solskin i et krus.'
    },
    {
      id: "7",
      danishDescription: 'Yellow Catuai er en levende, solkysset sort fra Brasilien, kendt for sin glatte krop og livlige smag. Denne mellemristede kaffe tilbyder en dejlig balance mellem sødme og syre, med noter af moden tropisk frugt, honning og et subtilt strejf af ristet hasselnød. Hver bønne, der dyrkes i de frodige dale i Brasiliens kaffehjerteland, er omhyggeligt behandlet for at bevare sin lyse, rene finish. Perfekt til dem, der nyder en forfriskende og frugtig kaffeoplevelse, Yellow Catuai vil lysne din dag op med hver tår.'
    },
  ]

  const translation = translations.find((item)=> item.id === id);

  useEffect(() => {
    fetch(`http://localhost:8081/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {languageData ? (
              <ProductCard
              styling='singleCard'
                title={data.name}
                imageSrc={data.image}
                price={data.price}
                valuta1=""
                valuta2=" DKK"
                roastAmount={data.roast}
              >
                <Button action={()=>addToCart(data)} buttontext='Tilføj til kurv' styling='singleCard'/>
                <p>{translation ? translation.danishDescription : data.description}</p>
              </ProductCard>
      ): (
        <ProductCard
        styling='singleCard'
          title={data.name}
          imageSrc={data.image}
          price={Math.round(data.price * 0.1448)}
          valuta1="$"
          valuta2=""
          roastAmount={data.roast}
        >
                          <Button action={()=>addToCart(data)} buttontext='Add to Cart' styling='singleCard'/>
          <p>{data.description}</p>
        </ProductCard>
      )}
    </div>
  );
};
