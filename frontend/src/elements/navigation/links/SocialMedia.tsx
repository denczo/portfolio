import { SocialIcon } from 'react-social-icons';

const socialMedia = [
    // { url: "https://www.upwork.com/freelancers/~01a3417f302aa70c55" },
    { url: "https://www.linkedin.com/in/denczo/" },
    { url: "https://github.com/denczo" },
    { url: "https://www.youtube.com/@pygineer" }
]

const SocialMedia = () => {
    return (<div className="flex justify-evenly flex-wrap mb-4 space-x-4">
        {socialMedia.map((item, index) => <SocialIcon  key={index} className="Icon" fgColor={"#ffffff"} bgColor={"None"} url={item.url} />)}
    </div>
    );
}


export default SocialMedia;