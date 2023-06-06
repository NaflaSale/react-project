import { AiTwotoneStar } from "react-icons/ai";

interface IProps {
  text: string;
  title: string;
  hint: string;
  img: string;
}
function UserCom(props: IProps) {
  return (
    <div className="flex container mx-auto justify-items-center   sm:h-[249pxpx] sm:w-[240px] md:h-[290pxpx] md:w-[400px]  h-[439pxpx] w-screen pt-20 2xl:pr-24 xl:pr-20 md:pr-14 sm:pr-0  ">
      <div className="h-[209px] w-[300px]  ">
        <div className="pt-4 sm:pt-2  pl-4 flex justify-end">
          <AiTwotoneStar className="text-[#DBF301]" />
          <AiTwotoneStar className="text-[#DBF301]" />
          <AiTwotoneStar className="text-[#DBF301]" />
          <AiTwotoneStar className="text-[#DBF301]" />
          <AiTwotoneStar className="text-[#DBF301]" />
        </div>
        <div className="sm:text-[10px] text-[20px] md:text-[12px] font-normal text-left sm:pt-1 sm:pl-4 pt-4 2xl:pt-8 xl:pt-8 pl-5">
          {" "}
          {props.text}
        </div>
        <div className="flex float-left gap-4 sm:gap-1 lg:pt-12 justify-between sm:pl-2 pl-5 p-4 sm:p-1">
          <div className="text-[10px] font-light text-gray-400">
            {" "}
            {props.title}
          </div>
          <div className="text-[10px] font-normal  "> {props.hint}</div>
        </div>
      </div>
      <div className="w-[240px] h-[260px]">
        <img src={props.img} />
      </div>
    </div>
  );
}

export default UserCom;
