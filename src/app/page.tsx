import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Below Code Is With Tailwind */}
      <div className="flex justify-between items-center bg-slate-200">
        <div className="basis-1/2 h-full m-[30px] text-[70px] font-black">
          <p className="text-sky-800">Hey,</p>
          <p className="text-cyan-900">My Name is</p> <span className="text-cyan-700">Kashif Ali, </span>
          <br /> <p className="text-cyan-900">and I am Next JS Developer</p>
          <p className="text-lg font-semibold text-teal-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptatibus, atque consequuntur dignissimos cupiditate nemo dolor,
            cum, et commodi hic nisi repellat provident facere nesciunt? Dolorem
            sint deserunt quo consequuntur.
          </p>
        </div>
        <div className="basis-1/2 flex justify-center items-center">
          <Image
            height={375}
            width={375}
            src="https://th.bing.com/th?id=OIP.2cCra6k3qrr4RZNXv3FSWAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Boy pic"
            className="h-96 w-96"
          />
        </div>
      </div>
    </>
  );
}
