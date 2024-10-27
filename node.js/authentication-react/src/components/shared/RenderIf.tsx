type Props = {
  children: React.ReactNode;
  condition: boolean;
};
const RenderIf = ({ condition, children }: Props) => {
  return condition ? <>{children}</> : null;
};

export default RenderIf;
