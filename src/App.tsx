import { Button as BaseButton, Text as BaseText } from "./component";
import { Main, Row, Section } from "./layout";
import { InferStoreState, createStore } from "./store";

const countStore = createStore({ count_1: 0, count_2: 1 });

const Button = (
  props: React.ComponentProps<typeof BaseButton> & {
    stateKey: StoreStateKey;
  }
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { stateKey, onClick, ...tail } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // noop

    onClick?.(e);
  };

  return <BaseButton onClick={handleClick} {...tail} />;
};

const Text = (
  props: Omit<React.ComponentProps<typeof BaseText>, "children"> & {
    stateKey: StoreStateKey;
  }
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { stateKey, ...tail } = props;

  const value = 0;

  return <BaseText {...tail}>{value}</BaseText>;
};

const App = () => {
  return (
    <Main>
      <h1 className="text-4xl text-stone-900">Custom Store</h1>
      <Section>
        <Row>
          <Button stateKey="count_1">Increment 1</Button>
          <Text stateKey="count_1" />
        </Row>
        <Row>
          <Button stateKey="count_2">Increment 2</Button>
          <Text stateKey="count_2" />
        </Row>
      </Section>
    </Main>
  );
};

type StoreState = InferStoreState<typeof countStore>;
type StoreStateKey = keyof StoreState;

export default App;
