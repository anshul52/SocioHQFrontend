import ScrollStack, { ScrollStackItem as StackCard } from "../ui/ScrollStack";

const ScrollStackSection = () => {
  return (
    <ScrollStack>
      <StackCard>
        <h2>Card 1</h2>
        <p>This is the first card in the stack</p>
      </StackCard>
      <StackCard>
        <h2>Card 2</h2>
        <p>This is the second card in the stack</p>
      </StackCard>
      <StackCard>
        <h2>Card 3</h2>
        <p>This is the third card in the stack</p>
      </StackCard>
    </ScrollStack>
  );
};

export default ScrollStackSection;
