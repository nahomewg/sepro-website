import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant?: 'btn_orange';
}

const Button = ( { type, title, icon, variant }: ButtonProps ) => {
  return (
    <button className={`gap-3 rounded-full border${variant}`} type={type}>
    {icon && <Image src={icon} alt={title} width={24} height={24} />}
    <label>{title}</label>
    </button>
  )
}

export default Button