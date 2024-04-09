import Image from "next/image";
import React from "react";

const PersonalSection = async () => {
    return (
    <div className="mx-auto max-w-4xl p-4 rounded-xl border-4 border-purple-600">
      <h2 className="text-xl font-bold mb-4">About Me</h2>
      <p>I genuinely enjoy working on Web Development, Machine Learning, and Data Engineering. Outside of tech, I love being outdoors, whether it&apos;s hiking, riding my motorcycle, lifting weights, or playing basketball. I&apos;m also a big NBA fan, with Brandon Ingram being my current favorite player for his fantastic mid-range skills.</p>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <div className="flex flex-col items-center">
          <div className="rounded-md border-4 border-purple-600">
            <Image src="/images/mountain.jpg" alt="Mountain" width={200} height={200} className="rounded-md" />
          </div>
          <p className="mt-2">Hiking Adventures</p>
        </div>
        <div className="flex flex-col items-center">
            <div className="rounded-md border-4 border-purple-600">
                <Image src="/images/bike.jpg" alt="Motorcycle" width={200} height={200} className="rounded-md" />
            </div>
            <p className="mt-2">Motorcycle Rides</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-md border-4 border-purple-600">
            <Image src="/images/bi.jpg" alt="Brandon Ingram" width={200} height={200} className="rounded-md" />
          </div>
          <p className="mt-2">Brandon Ingram</p>
        </div>
      </div>
    </div>
    );
};

export default PersonalSection;

