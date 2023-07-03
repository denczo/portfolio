import { SocialIcon } from 'react-social-icons';

const socialMedia = [
    { url: "https://www.upwork.com/freelancers/~01a3417f302aa70c55" },
    { url: "https://www.denicz.info" },
    { url: "https://github.com/denczo" },
    { url: "https://www.youtube.com/@pygineer" }
]

const SocialMedia = () => {
    return (<div className="flex justify-around w-[300px] mb-4">
        {socialMedia.map((item, index) => <SocialIcon key={index} className="Icon" fgColor={"#ffffff"} bgColor={"#1e293b"} url={item.url} />)}
    </div>
    );
}


export default SocialMedia;