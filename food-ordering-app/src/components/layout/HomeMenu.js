import Image from "next/image";

export default function HomeMenu() {
    return (
        <section className="">
            <div>
            <div className="h-48 w-48 absolute ">
            <Image src={'/sallad1.png'} layout={'fill'} 
            objectFit={'contain'} alt={'Ensalada'} />
            </div>
            <div className="h-48 w-48 relative ">
            <Image src={'/sallad2.png'} layout={'fill'} 
            objectFit={'contain'} alt={'Ensalada'} />
            </div>
            </div>
            <div className="text-center">
                <h3 className="uppercase text-gray-500 font-semibold">
                    Check Out
                </h3>
                <h2 className="text-primary font-bold text-4xl italic leading-4 ">Menu</h2>
            </div>
        </section>
    );
}