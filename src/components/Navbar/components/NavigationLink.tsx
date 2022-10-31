
type Props = {
  props: { route: string; text: string };
};

const NavigationLink = ({ props: { route, text } }: Props) => {
  return (
    <a href={route} className="navbar__link" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default NavigationLink;
