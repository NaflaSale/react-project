interface IProps {
  title: string;
  text: string;
  img: string;
}
function TextIcon(props: IProps) {
  return (
    <div className=" grid justify-items-center w-[330px]  h-[200px] sm:h-[270] sm:w-[100px] sm:p-3  md:w-[90px] md:p-3 items-center gap-4">
      <img
        src={props.img}
        className="w-[44px] h-[44px] sm:w-[24px] sm:h-[24px]  md:w-[24px]  md:h-[24px]"
      />
      <h2 className="font-sans  ">{props.title}</h2>
      <div className=" font-sans  flex flex-col text-center p-[3px] items-center text-[10px] font-light ont-bold sm:text-[4px] md:text-[8px]  ">
        {props.text}
      </div>
    </div>
  );
}

export default TextIcon;
