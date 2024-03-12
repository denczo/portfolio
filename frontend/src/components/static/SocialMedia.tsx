import Image from 'next/image';

const SocialMedia = ({size} : {size: number}) => {
    return (<div className="flex justify-center gap-10">
    <Image src="/icons/linkedin.svg" alt="Icon" width={size} height={size} />
    <Image src="/icons/github.svg" alt="Icon" width={size} height={size} />
    <Image src="/icons/mail.svg" alt="Icon" width={size} height={size} />
    <Image src="/icons/youtube.svg" alt="Icon" width={size} height={size} />
  </div>)
}

export default SocialMedia;