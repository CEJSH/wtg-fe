import { ConfigProvider } from 'antd';

export function InfoBox({ children }: { children?: React.ReactNode }) {
  const boxClassName = 'pt-[4px] pb-[11px] border-[1px] border-solid border-y-1 border-x-0 border-t-0 border-[#cccccc]';
  return (
    <div className="flex pt-[40px] pb-[28px]">
      <div className="flex flex-row gap-[30px] mx-[333px] w-full">
        <div className="w-full flex flex-col">
          <div className={boxClassName}>
            <div className="text-[16px] font-bold leading-[20px] tracking-wide">{`소개할게요`}</div>
          </div>
          <div>
            <div>
              <div>c</div>
              <img src="" alt="" />
            </div>
            <div>3</div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className={boxClassName}>
            <div className="text-[16px] font-bold leading-[20px] tracking-wide">{`뉴스`}</div>
          </div>
          <div>
            <div>
              <div>b</div>
              <img src="" alt="" />
            </div>
            <div>2</div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className={boxClassName}>
            <div className="text-[16px] font-bold leading-[20px] tracking-wide">{`공지사항`}</div>
          </div>
          <div>
            <div>
              <div>a</div>
              <img src="" alt="" />
            </div>
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
