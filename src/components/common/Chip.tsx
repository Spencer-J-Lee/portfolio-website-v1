interface ChipProps {
  text: string;
}

export const Chip = ({ text }: ChipProps) => {
  return (
    <div className="bg-accent/15 text-accent flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium">
      {text}
    </div>
  );
};
