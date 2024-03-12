import Image from 'next/image';

const SocialMedia = () => {
    return (<div className="flex justify-center gap-10">
    <Image src="/icons/linkedin.svg" alt="Icon" width="35" height="35" />
    <Image src="/icons/github.svg" alt="Icon" width="35" height="35" />
    <Image src="/icons/mail.svg" alt="Icon" width="35" height="35" />
    <Image src="/icons/youtube.svg" alt="Icon" width="35" height="35" />
  </div>)
}

export default SocialMedia;