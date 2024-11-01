import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "../components/Button/Button";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { HomeCard } from "../components/HomeCard/HomeCard";
import { PageDivider } from "../components/PageDivider/PageDivider";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

export const Checkout = () => {
  const navigate = useNavigate();
  const { languageData } = useContext(LanguageContext);
  const { cartData, setCartData } = useContext(CartContext);
  const totalPrice = cartData?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = totalPrice * 0.25;

  const [firstname, setFirstname] = useState("");
  const [firstnameError, setFirstnameError] = useState(false);

  const [lastname, setLastname] = useState("");
  const [lastnameError, setLastnameError] = useState(false);

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);

  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const [province, setProvince] = useState("");
  const [provinceError, setProvinceError] = useState(false);

  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState(false);

  const [shipping, setShipping] = useState("");

  const [formNotValidAlert, setFormNotValidAlert] = useState(false);

  function firstnameChange(event) {
    const value = event.target.value;
    setFirstname(value);
    setFirstnameError(value.length < 2);
  }
  function lastnameChange(event) {
    const value = event.target.value;
    setLastname(value);
    setLastnameError(value.length < 2);
  }

  function adressChange(event) {
    const value = event.target.value;
    setAddress(value);
    setAddressError(value.length < 2);
  }

  function cityChange(event) {
    const value = event.target.value;
    setCity(value);
    setCityError(value.length < 2);
  }

  function phoneChange(event) {
    const value = event.target.value;
    setPhone(value);
    setPhoneError(value.length !== 8);
  }

  function provinceChange(event) {
    const value = event.target.value;
    setProvince(value);
    setProvinceError(value.length < 2);
  }

  function countryChange(event) {
    const value = event.target.value;
    setCountry(value);
    setCountryError(value.length < 2);
  }

  function shippingChange(event) {
    const value = event.target.value;
    setShipping(value);
  }

  function formValidation() {
    return (
      firstname.length >= 2 &&
      lastname.length >= 2 &&
      address.length >= 2 &&
      city.length >= 2 &&
      phone.length === 8 &&
      province.length >= 2 &&
      country.length >= 2 &&
      shipping !== ""
    );
  }

  function isFormvalid() {
    if (!formValidation()) {
      setFormNotValidAlert(true);
    } else {
      setFormNotValidAlert(false);
      navigate("/");
      setCartData([]);
    }
  }

  return (
    <>
      {languageData ? (
        <>
          <Wrapper styling="checkoutSection">
            <h1>Betaling</h1>
            <Wrapper styling="gridCheckout">
              <Wrapper styling="formCheckout">
                <form action="">
                  <label>Fornavn</label>
                  <input
                    type="text"
                    value={firstname}
                    onChange={firstnameChange}
                    className={firstnameError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">Efternavn</label>
                  <input
                    type="text"
                    value={lastname}
                    onChange={lastnameChange}
                    className={lastnameError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">Adresse</label>
                  <input
                    type="text"
                    value={address}
                    onChange={adressChange}
                    className={addressError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">By</label>
                  <input
                    type="text"
                    value={city}
                    onChange={cityChange}
                    className={cityError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">Telefon</label>
                  <input
                    type="number"
                    value={phone}
                    onChange={phoneChange}
                    className={phoneError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">Region</label>
                  <input
                    type="text"
                    value={province}
                    onChange={provinceChange}
                    className={provinceError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">Land</label>
                  <input
                    type="text"
                    value={country}
                    onChange={countryChange}
                    className={countryError ? "errorStyling" : ""}
                  />
                </form>
              </Wrapper>
              <Wrapper styling="cartCheckout">
                {cartData?.map((item) => (
                  <div>
                    <h1>{item.name}</h1>
                    <h2>x {item.quantity}</h2>
                    <h3>{item.price * item.quantity} DKK</h3>
                    <span></span>
                  </div>
                ))}
                <section>
                  <p>I alt</p>
                  <p>{totalPrice + tax} Dkk</p>
                </section>
                <section>
                  <h4>Vælg Fragt</h4>
                  <div>
                    <span>
                      <label htmlFor="">FakeEx</label>
                      <input
                        type="radio"
                        name={shipping}
                        value="fakeEx"
                        onChange={shippingChange}
                      />
                    </span>
                    <span>
                      <label htmlFor="">FakeEx Express</label>{" "}
                      <input
                        type="radio"
                        name={shipping}
                        value="fakeEx Express"
                        onChange={shippingChange}
                      />
                    </span>
                  </div>
                </section>
              </Wrapper>
            </Wrapper>
            {formNotValidAlert && (
              <p className="alertMessage">Alle felter skal udfyldes!!!</p>
            )}
            <Button
              styling="payNow"
              buttontext="Betal nu"
              action={isFormvalid}
            />
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
        </>
      ) : (
        <>
          <Wrapper styling="checkoutSection">
            <h1>Checkout</h1>
            <Wrapper styling="gridCheckout">
              <Wrapper styling="formCheckout">
                <form action="">
                  <label>First name</label>
                  <input
                    type="text"
                    value={firstname}
                    onChange={firstnameChange}
                    className={firstnameError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">Last name</label>
                  <input
                    type="text"
                    value={lastname}
                    onChange={lastnameChange}
                    className={lastnameError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={adressChange}
                    className={addressError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={cityChange}
                    className={cityError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">Phone</label>
                  <input
                    type="number"
                    value={phone}
                    onChange={phoneChange}
                    className={phoneError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">Province</label>
                  <input
                    type="text"
                    value={province}
                    onChange={provinceChange}
                    className={provinceError ? "errorStyling" : ""}
                  />
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={countryChange}
                    className={countryError ? "errorStyling" : ""}
                  />
                </form>
              </Wrapper>
              <Wrapper styling="cartCheckout">
                {cartData?.map((item) => (
                  <div>
                    <h1>{item.name}</h1>
                    <h2>x {item.quantity}</h2>
                    <h3>${Math.round(item.price * item.quantity * 0.1448)}</h3>
                    <span></span>
                  </div>
                ))}
                <section>
                  <p>Total</p>
                  <p>${Math.round((totalPrice + tax) * 0.1448)}</p>
                </section>
                <section>
                  <h4>Choose shipping</h4>
                  <div>
                    <span>
                      <label htmlFor="">FakeEx</label>
                      <input
                        type="radio"
                        name={shipping}
                        value="fakeEx"
                        onChange={shippingChange}
                      />
                    </span>
                    <span>
                      <label htmlFor="">FakeEx Express</label>{" "}
                      <input
                        type="radio"
                        name={shipping}
                        value="fakeEx Express"
                        onChange={shippingChange}
                      />
                    </span>
                  </div>
                </section>
              </Wrapper>
            </Wrapper>
            {formNotValidAlert && (
              <p className="alertMessage">All inputs must be filled!</p>
            )}
            <Button
              styling="payNow"
              buttontext="Pay Now"
              action={isFormvalid}
            />
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
        </>
      )}
    </>
  );
};
