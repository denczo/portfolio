import Image from 'next/image';

const SocialMedia = ({size} : {size: number}) => {
    return (<div className="flex justify-center gap-10 pb-4">
    <a href="https://www.linkedin.com/in/denczo/"><Image src="/icons/linkedin.svg" alt="Icon" width={size} height={size} /></a>
    <a href="https://github.com/denczo"><Image src="/icons/github.svg" alt="Icon" width={size} height={size} /></a>
    {/* <Image src="/icons/mail.svg" alt="Icon" width={size} height={size} /> */}
    <a href="https://www.youtube.com/@pygineer"><Image src="/icons/youtube.svg" alt="Icon" width={size} height={size} /></a>
  </div>)
}

export default SocialMedia;