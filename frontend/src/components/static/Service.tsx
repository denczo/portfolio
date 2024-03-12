import { ServiceData } from "src/app/types/types.d";

const Service = (serviceData : ServiceData) => {
    return <div className="flex flex-col w-1/3 p-8">
        <img className="w-full h-auto pl-16 pr-16" src={serviceData.img} alt="transition" />
        <p className="text-xl">{serviceData.hl}</p>
        <p className="mt-3 text-lg">{serviceData.desc}</p>
    </div>
}

export default Service;