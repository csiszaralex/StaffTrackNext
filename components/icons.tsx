// components/Icons.tsx
import { User, LogIn, Eye, EyeOff, type LucideProps } from "lucide-react";

const iconMap = {
  user: User,
  login: LogIn,
  eye: Eye,
  eyeOff: EyeOff,
};

type IconName = keyof typeof iconMap;

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = iconMap[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
}
