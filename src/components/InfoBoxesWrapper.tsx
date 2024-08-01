export default function InfoBoxesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex pt-[40px] pb-[28px] z-10 text-black bg-white h-full">
      <div className="flex flex-row gap-[30px] md:mx-[22%] mx-[16px] w-full">{children}</div>
    </div>
  );
}
