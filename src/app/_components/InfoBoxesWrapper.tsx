export default function InfoBoxesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex pt-[40px] pb-[28px]">
      <div className="flex flex-row gap-[30px] mx-[333px] w-full">{children}</div>
    </div>
  );
}
