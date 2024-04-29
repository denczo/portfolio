import Image from 'next/image';
import BounceIn from 'src/components/animation/BounceIn';

const SocialMedia = ({size} : {size: number}) => {

    

    return (<div className="flex"  style={{ pointerEvents: 'auto' }}>
    <BounceIn delay={0.2}>
    <a className="flex bg-black bg-opacity-50 p-4 mr-1 rounded-full transition-all hover:scale-110 scale-100" href="https://www.linkedin.com/in/denczo/"><Image src="/icons/linkedin.svg" alt="Icon" width={size} height={size} /></a>
    <a className="flex bg-black bg-opacity-50 p-4 mx-1 rounded-full transition-all hover:scale-110 scale-100" href="https://github.com/denczo"><Image src="/icons/github.svg" alt="Icon" width={size} height={size} /></a>
    <a className="flex bg-black bg-opacity-50 p-4 mx-1 rounded-full transition-all hover:scale-110 scale-100" href="https://www.youtube.com/@pygineer"><Image src="/icons/youtube.svg" alt="Icon" width={size} height={size} /></a>
    <a className="flex bg-black bg-opacity-50 p-4 mx-1 rounded-full transition-all hover:scale-110 scale-100" href="https://www.instagram.com/thefullstacklab/"><Image src="/icons/insta.svg" alt="Icon" width={size} height={size} /></a>
    </BounceIn>

  </div>)
}

export default SocialMedia;