interface IProps {
    text: string;
    color: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
  }
  function Button(props: IProps) {
    return (
      <div
        onClick={props.onClick}
        className={`w-[174px]  h-[42px] sm:w-[90px] sm:p-3  rounded-lg flex justify-center items-center font-sans  ${props.color} `}
      >
        {props.text}
      </div>
    );
  }
  
  export default Button;
  