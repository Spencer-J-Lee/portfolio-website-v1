interface ScrollAnchorProps {
  id: string;
  offset?: number;
}

export const ScrollAnchor = ({ id, offset = 80 }: ScrollAnchorProps) => {
  return (
    <div className="relative">
      <div
        id={id}
        className="absolute"
        style={{ top: -offset }}
        aria-hidden="true"
      />
    </div>
  );
};
