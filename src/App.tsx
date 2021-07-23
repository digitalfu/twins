import "./styles.css";
import Card from "./card/Card";
import emojis from "emojis-list";

const emojiSet = emojis.slice(0, 31);
const pairs = [...emojiSet, ...emojiSet];

export default function App() {
  return (
    <div className="GridContainer">
      {pairs.map((e: string, i: number) => (
        <Card key={i} emoji={e} index={i} />
      ))}
    </div>
  );
}
