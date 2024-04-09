import Image from 'next/image';

const HeroDisplay = async () => {
    return (
        <div className="flex-1 justify-center items-center rounded-xl overflow-hidden border-4 border-purple-600 mx-auto max-w-md mx-4 my-2">
            <Image
                src='/images/Hero.jpeg'
                layout="responsive"
                width={200}
                height={200}
                alt='Image of Ethan Rohman'
            />
        </div>
    );
};

export default HeroDisplay;
