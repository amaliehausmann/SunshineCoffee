import style from './Policy.module.scss';


export const Policy = ({
  titleone,
  subtitle,
  text,
  subtitletwo,
  listItemOne,
  listItemTwo,
  listItemThree,
  listItemFour,
  subtitlethree,
  texttwo,
  subtitleFour,
  textthree,
}) => {
  return (
    <section className={style.policyStyling}>
      <h1>{titleone}</h1>
      <h2>{subtitle}</h2>
      <p>{text}</p>
      <h2>{subtitletwo}</h2>
      <ul>
        <li>{listItemOne}</li>
        <li>{listItemTwo}</li>
        <li>{listItemThree}</li>
        <li>{listItemFour}</li>
      </ul>
      <h2>{subtitlethree}</h2>
      <p>{texttwo}</p>
      <h2>{subtitleFour}</h2>
      <p>{textthree}</p>
    </section>
  );
};
