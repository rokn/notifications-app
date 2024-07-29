import * as Avatar from '@radix-ui/react-avatar';

interface AvatarCircleProps {
  src?: string;
  alt?: string;
}

const AvatarCircle: React.FC<AvatarCircleProps> = ({ src, alt }) => {
  const initials = alt?.split(' ').map((word) => word[0]).join('') ?? 'NA';

  return (
    <Avatar.Root className='inline-flex items-center justify-center w-11 h-11 rounded-full select-none overflow-hidden'>
      <Avatar.Image
        className='rounded-full w-[100%] h-[100%] object-cover'
        src={src}
        alt={alt}
      />
      <Avatar.Fallback className='bg-white' delayMs={800}>
        {initials}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default AvatarCircle;