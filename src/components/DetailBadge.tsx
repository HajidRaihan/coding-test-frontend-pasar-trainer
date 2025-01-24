import { DetailBadgeProps } from "@/types/pokemon";
import { twMerge } from "tailwind-merge";

const DetailBadge: React.FC<DetailBadgeProps> = ({ type, value, className = "" }) => {
  return (
    <div className={twMerge(`px-3 py-1 border rounded-lg`, className)}>
      <p className="text-xs">
        {type} <br /> {value}
      </p>
    </div>
  );
};

export default DetailBadge;
