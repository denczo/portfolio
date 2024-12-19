import { ServiceData } from "../../../types/types.d";

export default function Service(serviceData: ServiceData) {
    return <div className="flex text-center items-center max-h-96 max-w-96 min-h-full flex-col m-4 p-8 rounded-md bg-slate-700 cursor-default">
        <img className="w-2/3 h-auto" src={serviceData.img} alt="transition" />
        <p className="text-xl font-bold">{serviceData.hl}</p>
        <p className="mt-3 text-lg">{serviceData.desc}</p>
    </div>
}