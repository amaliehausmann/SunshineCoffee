import { useContext, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { HomeCard } from "../components/HomeCard/HomeCard";
import { PageDivider } from "../components/PageDivider/PageDivider";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { Button } from "../components/Button/Button";

export const Home = () => {
  const { languageData } = useContext(LanguageContext);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <section>
      {languageData ? (
        <section>
          <Header />
          <Wrapper styling="threecards">
            <HomeCard
              styling="threecards"
              title="De rigtige bønner"
              description="Vores rejse begynder med en dybt rodfæstet forbindelse til jorden, da vi opsøger landmænd, der opretholder miljøvenlig praksis og prioriterer deres lokalsamfunds velfærd. Gennem personlige relationer og gensidig respekt samarbejder vi tæt med disse landmænd og forstår deres metoder og værdier."
              imgSrc="rightbeans.png"
            />
            <HomeCard
              styling="threecards"
              title="Forsigtigt håndteret"
              description="Hver bønne er omhyggeligt håndplukket på toppen af ​​modenhed, hvilket sikrer optimal smag og aroma. Vi omfavner mangfoldighed i vores udvalg og værner om de unikke egenskaber for hver region og sort. Fra de frodige bjergsider til de solbeskinnede dale krydser vi landskaberne på jagt efter perfektion."
              imgSrc="carefullyhandled.png"
            />
            <HomeCard
              styling="threecards"
              title="Fra os til dig"
              description="Vores engagement i økologisk landbrug betyder, at vores bønner er fri for skadelige kemikalier, hvilket tillader de naturlige smage at skinne igennem. Vi tror på gennemsigtighed og sporbarhed, hvilket giver vores kunder en ægte forbindelse til deres kaffes oprindelse."
              imgSrc="fromustoyou.png"
            />
          </Wrapper>
          <PageDivider />
          <Wrapper styling="shopnow">
            <HomeCard
              styling="shopnow"
              title="Shop nu"
              description="Vores lækre kaffe får dig til at brygge den bedste kop kaffe, du nogensinde har smagt, på ingen tid overhovedet. Og den bedste del af det? Det er helt økologisk, fair trade og bæredygtigt fremskaffet. Så kom i gang"
            >
              {" "}
              <Button><Link to="/products">Gå til produkter</Link></Button>
            </HomeCard>
          </Wrapper>
          <PageDivider></PageDivider>
          <Wrapper styling="testimoniesWrapper">
            <h1>Vidnesbyrd</h1>
            <Wrapper styling="gridded">
              <HomeCard
                styling="testimonies"
                title="John"
                description="“Sunshine Coffee leverer virkelig et fantastisk produkt. Jeg elsker deres kaffe, og det guidede flow er fantastisk...”"
              ></HomeCard>
              <HomeCard
                styling="testimonies"
                title="Eva"
                description="“Sunshine Coffee leverer virkelig et fantastisk produkt. Jeg elsker deres kaffe, og det guidede flow er fantastisk...”"
              ></HomeCard>
              <HomeCard
                styling="testimonies"
                title="Peter"
                description="“Sunshine Coffee leverer virkelig et fantastisk produkt. Jeg elsker deres kaffe, og det guidede flow er fantastisk...”"
              ></HomeCard>
              <HomeCard
                styling="testimonies"
                title="Michelle"
                description="“Sunshine Coffee leverer virkelig et fantastisk produkt. Jeg elsker deres kaffe, og det guidede flow er fantastisk...”"
              ></HomeCard>
            </Wrapper>
          </Wrapper>
        </section>
      ) : (
        <section>
          <Header />
          <Wrapper styling="threecards">
            <HomeCard
              styling="threecards"
              title="The right beans"
              description="Our journey begins with a deep-rooted connection to the land, as we seek out farmers who uphold environmentally-friendly practices and prioritize the well-being of their communities. Through personal relationships and mutual respect, we collaborate closely with these farmers, understanding their methods and values."
              imgSrc="rightbeans.png"
            />
            <HomeCard
              styling="threecards"
              title="Carefully handled"
              description="Each bean is carefully handpicked at the peak of ripeness, ensuring optimal flavor and aroma. We embrace diversity in our selection, cherishing the unique characteristics of each region and varietal. From the lush mountainsides to the sun-kissed valleys, we traverse the landscapes in search of perfection."
              imgSrc="carefullyhandled.png"
            />
            <HomeCard
              styling="threecards"
              title="From us to you"
              description="Our commitment to organic farming means that our beans are free from harmful chemicals, allowing the natural flavors to shine through. We believe in transparency and traceability, providing our customers with a genuine connection to the origins of their coffee."
              imgSrc="fromustoyou.png"
            />
          </Wrapper>
          <PageDivider />
          <Wrapper styling="shopnow">
            <HomeCard
              styling="shopnow"
              title="Shop now"
              description="Our delicious coffees will get you brewing the best cup of coffee you ever tasted in no time at all. And the best part of it? It is totally organic, fair trade and sustainably sourced. So get brewing"
            >
              <Button><Link to="/products">Gå til produkter</Link></Button>
            </HomeCard>
          </Wrapper>
          <PageDivider></PageDivider>
          <Wrapper styling="testimoniesWrapper">
            <h1>Testimonies</h1>
            <Wrapper styling="gridded">
              <HomeCard
                styling="testimonies"
                title="John"
                description="“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”"
              ></HomeCard>
              <HomeCard
                styling="testimonies"
                title="Eva"
                description="“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”"
              ></HomeCard>
              <HomeCard
                styling="testimonies"
                title="Peter"
                description="“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”"
              ></HomeCard>
              <HomeCard
                styling="testimonies"
                title="Michelle"
                description="“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”"
              ></HomeCard>
            </Wrapper>
          </Wrapper>
        </section>
      )}
    </section>
  );
};
