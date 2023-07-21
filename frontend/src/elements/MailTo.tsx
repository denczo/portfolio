import { HashLink } from 'react-router-hash-link';

const MailTo = ({ mailto, label }: {mailto: any, label: string}) => {
    return (
        <HashLink className="desktop:text-[30px] text-center mobile:text-[12px] font-medium mt-6 animate-pulse"
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </HashLink>
    );
};

export default MailTo;