import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    color?: string;
    textColor? : string;
    borderSize? : string;
    borderColor? : string;
}

const Button = ( { type, title, icon, color, textColor, borderSize, borderColor }: ButtonProps ) => {
  return (
    <button className={`gap-3 rounded-3xl flex items-center px-10 py-5 ${color ? color : 'orange'} ${borderSize ? borderSize : '2'} ${borderColor ? borderColor : 'orange'}`} type={type}>
    {icon && <Image src={icon} alt={title} width={24} height={24} />}
    <label className={`text-xl font-semibold cursor-pointer ${textColor ? textColor : 'none'}` }>{title}</label>
    </button>
  )
}

export default Button