import { componentsMap } from "./mapComponents";

export default function PageRenderer({ config }: { config: any[] }) {
  return (
    <>
      {config.map((block, i) => {
        const Component = componentsMap[block.component]; // name se component uthao
        if (!Component) return null;
        return <Component key={i} {...block.props} />;
      })}
    </>
  );
}
